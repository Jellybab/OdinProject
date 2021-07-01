def caesar_cipher(string, number)
    cipher = ""
    string.each_char do |char|
        floor = char.ord < 91 ? 65 : 97
        if char.ord.between?(97, 122) || char.ord.between?(65, 90)
            value = (((char.ord - floor) + number) % 26) + floor
            cipher += value.chr
        else
            cipher += (char)
        end
    end
    puts cipher

end

caesar_cipher("What a string!", 5)