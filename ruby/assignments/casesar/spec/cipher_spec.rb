# frozen_string_literal: true

require './lib/caesar'
describe Caesar do
  describe '#cipher' do
    it 'ciphers string into mumbojumbo' do
      caesar = Caesar.new
      expect(caesar.cipher('What a string!', 5)).to eql('Bmfy f xywnsl!')
    end
  end
end
