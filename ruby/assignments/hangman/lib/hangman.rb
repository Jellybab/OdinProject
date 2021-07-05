
class Game
  def initialize()
    @winner = false
    @round = 1
    @chances = 12
    @finished = false
    generate_words()
  end

  public
  def start()
    @word = pick_word().split("")
    @hidden_word = Array.new(@word.length(), "_")
    print "#{@word} + #{@hidden_word}"
    game_loop()
  end

  def load()
    file = File.read("save.dat").split(",")
    @round = file[0].to_i
    @random_word_number = file[1]
    @word = @dictionary[@random_word_number.to_i].split("")
    print @word
    @hidden_word = file[2].split("")
    game_loop()
  end

  private 

  def save()
    File.write("save.dat", "#{@round},#{@random_word_number},#{@hidden_word.join()}" )
  end

  def generate_words
    @dictionary = []
    File.open("5desk.txt", "r") do |f|
      f.each_line do |line|
        line_length = line.length
        if line_length > 6 && line_length < 15
          @dictionary.push(line.strip)
        end
      end
    end
  end

  def pick_word
    @random_word_number = rand(0..@dictionary.length)
    random_word = @dictionary[@random_word_number]
  end

  def game_loop
    until @finished
      display_information()
      guess = player_guess()
      check_guess(guess)
      @round += 1
      if !@finished && @round > @chances
        puts "you ran out of chances"
        @finished = true
      end
    end
  end

  def display_information()
    puts "Round #{@round}:"
    puts @hidden_word.join(" ")
  end
  
  def player_guess()
    valid_guess = false
    until valid_guess
      puts "please enter a character or a word, or type save to save"
      guess = gets.chomp()
      if guess == "save"
        save()
      elsif guess =~ /\d/
        puts "you have entered an invalid character please only type letter a-z"
      elsif guess == ""
        puts "please enter something"
      else
        valid_guess = true
      end
    end
    guess
  end

  def check_guess(guess)
    if guess.length == 1
      @word.each_with_index do |char, i|
        if guess == char
          @hidden_word[i] = char
        end
      end
      if @hidden_word.join() == @word.join
        puts "You managed to guess all the correct letters"
        @winner = true
        @finished = true
      end
    elsif guess == @word
      puts "Well done you managed to guess the correct word"
      @winner = true
      @finished = true
    else
      puts "That's the wrong word"
    end
  end

end

game = Game.new
puts "would you like to start a new game or load"

state = gets.chomp()
if state == "load"
  game.load()
else
  game.start
end