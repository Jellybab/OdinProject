def cipher(string, shift)
  asciiString = string.bytes 
  p asciiString
  shiftedString = asciiString.map do |char|
    case char
      when 65..90, 97..122
        if 65..90 
          floor = 65
        else 
          floor = 97
        end
        char = ((char - floor + shift) % 26) + floor
      else
        char
    end
  end
  p shiftedString
  p shiftedString.pack("C*")
end

cipher("What a string!", 5)