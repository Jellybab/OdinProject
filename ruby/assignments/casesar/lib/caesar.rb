# frozen_string_literal: true

# class to cipher strings
class Caesar
  def cipher(string, shift)
    shifted_string = string.bytes.map do |char|
      case char
      when 65..90, 97..122
        shift(char, shift)
      else
        char
      end
    end
    shifted_string.pack('C*')
  end

  def shift(char, amount)
    floor = char <= 90 ? 65 : 97
    ((char - floor + amount) % 26) + floor
  end
end
