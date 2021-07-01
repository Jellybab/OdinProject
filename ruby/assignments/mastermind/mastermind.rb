class Mastermind
  def initialize
    @code = make_code()
  end

  def make_code()
    return code = Array.new(4) {rand(1..6)}
  end

  def compare_code(input)
    correct = Array.new
    input.each_with_index do |number, index|
      if input[index] == @code[index]
        correct.push("O")
      elsif input.any?(number)
        if @code.count(number) >= input.count(number)
          correct.push("X")
        end
      end
    end
    return correct.sort
  end
end

class Game
  def initialize()
    @started = false
    @round = 1
    @game_ended = false
    @is_winner = false
    @game = Mastermind.new()
  end

  def start()
    @started = true
    game_loop()
  end

  private
  def game_loop()
    until @game_ended
      user_code = get_input()
      comparison = @game.compare_code(user_code)
      check_comparison(comparison)
      @round += 1
    end
  end
  
  def get_input()
    valid_input = false
    until valid_input
      puts "Round #{@round}: "
      puts "please enter a 4 digit code. using numbers 1-6"
      input = gets.chomp.split("").map { |c| c.to_i}
      valid_input = (input.all? {|i| i < 7 && i > 0})
      unless valid_input
        puts "please enter a valid code"
      end
    end
    return input
  end

  def check_comparison(comparison)
    puts comparison.join
    if comparison.all?("O") && comparison.length == 4
      @is_winner = true
      @game_ended = true
      puts "Well done you guessed correctly"
    elsif @round >= 12
      puts "You guessed incorrectly and ran out of rounds. the world has now ended because of you, you idiot"
      @game_ended = true
    end
  end

end

game = Game.new()
game.start()