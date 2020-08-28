

def caesar(message, factor)
    factor = factor % 26
    puts factor
    message.bytes.map do |byte|
        if(byte >= 65 && byte <= 97)
            ((byte + factor - 65) % 26 + 65).chr
        elsif(byte >= 97 && byte <= 122)
            ((byte + factor - 97) % 26 + 97).chr
        else
            byte.chr
        end
    end.join
end


p caesar("What a string!", 5)