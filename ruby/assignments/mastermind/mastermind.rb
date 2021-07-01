class Mastermind
  def initialize
    @code = make_code()
  end

  def make_code()
    # make a randomizer - returns code
  end

  def compare_code(input)
    # compares players input to code - returns if correct
  end
end

class Game
  def initialize()
    @started = false
    @game_ended = false
    @game = Mastermind.new()
  end

  def start_game()
    @started = true
    game_loop()
  end

  private
  def game_loop()

    until @game_ended
      get_input()
      compare_codes()
    end

  end

end

game = Game.new()
game.start()