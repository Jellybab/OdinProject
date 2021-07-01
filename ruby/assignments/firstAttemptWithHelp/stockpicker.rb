def stock_picker(array)
    highestProfit = 0
    highestPair = ""
    array.each_with_index do |price1, index|
        i = index+1
        while i < array.length
            value = array[i] - array[index]
            if (value > highestProfit)
                highestProfit = value
                highestPair = "#{index}, #{i}"
            end
            i+=1
        end
    end
    puts highestPair


end

puts stock_picker([17,3,6,9,15,8,6,1,10])