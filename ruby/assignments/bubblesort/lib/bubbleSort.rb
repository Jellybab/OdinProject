def bubble_sort(array)
    loop do
        switches = 0
   
        array.each_with_index do |value, index|

            if index+1 < array.length
                if value > array[index+1]
                    tempValue = value
                    array[index] = array[index+1]
                    array[index+1] = tempValue
                    switches +=1
                end
            end
        end
    break if switches == 0
    end
    return array
    end


puts bubble_sort([4,3,78,2,0,2])