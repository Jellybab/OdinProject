dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(string, dictionary)
  count = {}
  dictionary.each do |word|
    count[word] = string.downcase.scan(/(?=#{word})/).count if string.downcase.include?(word)
  end
  p count
end

substrings("below", dictionary)
substrings("Howdy partner, sit down! How's it going?", dictionary)