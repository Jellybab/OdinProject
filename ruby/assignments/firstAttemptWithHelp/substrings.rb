def substrings(string, dictionary)
    count = {}
    dictionary.each do |word|
        count[word] = string.downcase.scan(/(?=#{word})/).count if string.downcase.include?(word)
    end
    count
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

puts substrings("Below", dictionary)
puts substrings("Howdy partner, sit down! How's it going?", dictionary)
