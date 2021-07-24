require './lib/caesar.rb'
describe Caesar do
  describe '#cipher' do
    it "ciphers string into mumbojumbo" do
      caesar = Caesar.new
      expect(caesar.cipher("What a string!", 5)).to eql("Bmfy f xywnsl!") 
    end
  end
end