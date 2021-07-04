
=begin first part //////////////////////////////////////////////////////////
puts 'EventManager Initialized!'

contents = File.read('event_attendees.csv')

lines = File.readlines('event_attendees.csv')

lines.each_with_index do |line, index|
  next if index == 0
  columns = line.split(",")
  name = columns[2]
  # p columns
end
=end

=begin Second Part ///////////////////////////////////////////////////////////////
# require 'csv'
# puts 'EventManager initialized.'

# contents = CSV.open('event_attendees.csv', headers: true)
# contents.each do |row|
#   name = row[2]
#   puts name
# end

# contents = CSV.open(
#   'event_attendees.csv',
#   headers: true, 
#   header_converters: :symbol
# )

# contents.each do |row|
#   name = row[:first_name]
#   zipcode = row[:zipcode]
#   puts "#{name} #{zipcode}"
# end

=end

=begin Third Part ///////////////////////////////////////////////////////////

# require 'csv'

# def clean_zipcode(zipcode)
#   zipcode.to_s.rjust(5, '0')[0..4]
# end

# puts 'EventManager initialized.'

# contents = CSV.open(
#   'full_event_attendees.csv', 
#   headers: true, 
#   header_converters: :symbol
# )

# contents.each do |row|
#   name = row[:first_name]
  
#   zipcode = clean_zipcode(row[:zipcode])

#   puts "#{name} #{zipcode}"
# end

=end

=begin Fourth part /////////////////////////////////////////////////////////////////

require 'csv'
require 'google/apis/civicinfo_v2'

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5, '0')[0..4]
end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    legislators = civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: ['legislatorUpperBody', 'legislatorLowerBody']
    )
    legislators = legislators.officials
    legislator_names = legislators.map(&:name)
    legislator_names.join(", ")
  rescue
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

puts 'EventManager initialized.'

contents = CSV.open(
  'full_event_attendees.csv',
  headers: true,
  header_converters: :symbol
)

contents.each do |row|
  name = row[:first_name]

  zipcode = clean_zipcode(row[:zipcode])

  legislators = legislators_by_zipcode(zipcode)

  puts "#{name} #{zipcode} #{legislators}"
end

=end


require 'csv'
require 'google/apis/civicinfo_v2'
require 'erb'

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5,"0")[0..4]
end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: ['legislatorUpperBody', 'legislatorLowerBody']
    ).officials
  rescue
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

def clean_home_phone(number)
  number.gsub!(/[()\-,. ]/, '')
  if number.length == 10
    number
  else
    if number.length == 11 && number.chars.first == "1"
      number[1..10]
    else
      '0000000000'
    end
  end
end

def save_thank_you_letter(id,form_letter)
  Dir.mkdir('output') unless Dir.exist?('output')

  filename = "output/thanks_#{id}.html"

  File.open(filename, 'w') do |file|
    file.puts form_letter
  end
end

def display_peak_hours(hours)
  counted_hours = Hash.new(0)
  hours.each do |hour|
    counted_hours[hour] += 1
  end
  counted_hours = counted_hours.sort_by {|k,v| v}.reverse
  print counted_hours
end

def display_peak_days(dates)
  dow = Hash.new(0)
  dates = dates.each do |date|
    split_date = date.split("/")
    day = Date.new(split_date[2].to_i, split_date[0].to_i, split_date[1].to_i).wday
    dow[day] += 1
  end
  dow = dow.sort_by{|k,v| v}.reverse
  print dow
end

puts 'EventManager initialized.'

contents = CSV.open(
  'event_attendees.csv',
  headers: true,
  header_converters: :symbol
)

template_letter = File.read('form_letter.erb')
erb_template = ERB.new template_letter
dates = []
times = []

contents.each do |row|
  id = row[0]
  name = row[:first_name]
  zipcode = clean_zipcode(row[:zipcode])
  home_phone = clean_home_phone(row[:homephone])
  split_date = row[:regdate].split(' ')
  dates.push(split_date[0])
  times.push(split_date[1].split(':')[0])
  legislators = legislators_by_zipcode(zipcode)

  form_letter = erb_template.result(binding)
  save_thank_you_letter(id,form_letter)
end

#display_peak_hours(times)
display_peak_days(dates)
