
class Caesar 
  def cipher(string, shift)
    asciiString = string.bytes 
    shiftedString = asciiString.map do |char|
      case char
        when 65..90, 97..122
          if char <= 90 
            floor = 65
          else 
            floor = 97
          end
          char = ((char - floor + shift) % 26) + floor
        else
          char
      end
    end
    converted = shiftedString.pack("C*")
    converted
  end
end
