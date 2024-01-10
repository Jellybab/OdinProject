dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
  => ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
def substrings(user_string, dictionary)
    user_string = (user_string.downcase).split
    count = Hast.new(0)

    dictionary.each do |word|
        if(user_string.includes? word)
            count[word] += user_string.scan(word).count
        end



