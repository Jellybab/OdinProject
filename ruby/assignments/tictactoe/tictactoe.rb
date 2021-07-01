class Board
  attr_reader :board
  attr_reader :turn
  def initialize()
    @board = [[ "+", "1", "2", "3"], ["A", " ", " ", " "], ["B", " ", " ", " "], ["C", " " ," " ," "]]
  end

  def print_board
    @board.each do |line|
      puts line.each {|grid| grid}.join(" ")
    end
  end

  def place_on_board(player, y, x)
    player == 1 ? @board[y][x] = "X" : @board[y][x] = "O"
  end

  def check_location(y, x)
    return @board[y][x] == " " ? true : false
  end

end

class Game
  def initialize
    @valid_input = [1, 2, 3]
    @started = false
    @turn = 2
    @is_winner = false
    @winner = 0
    @board = Board.new()
    @round = 0
    @winning_locations = 
    [
      [[1,1], [1,2], [1,3]],  
      [[2,1], [2,2], [2,3]],
      [[3,1], [3,2], [3,3]],
      [[1,1], [2,1], [3,1]],
      [[1,2], [2,2], [3,2]],
      [[1,3], [2,3], [3,3]],
      [[1,1], [2,2], [3,3]],
      [[1,3], [2,2], [3,1]],
    ] 
  end

  def start()
    @started = true
    game_loop()
  end

  private
  def game_loop()
      until @is_winner
        @round +=1
        @turn = @turn == 1 ? 2 : 1
        do_turn()
        check_for_winner()

      end
  end

  def do_turn()
    @board.print_board()
    location = get_location()
    @board.place_on_board(@turn, location[0], location[1])

  end

  def get_location()
    valid_location = false
    requested_location = ""
    until valid_location == true
      puts "it is player #{@turn}'s turn please state where you want to place. for example (A1 or C3)"
      requested_location = gets.chomp().upcase().chars()
      requested_location[0] = convert_y(requested_location[0])
      requested_location[1] = requested_location[1].to_i
      valid_location = check_valid_location(requested_location)
    end
    return requested_location
  end

  def convert_y(y)
    case y
    when "A"
      return 1
    when "B"
      return 2
    when "C"
      return 3
    end
  end

  def check_valid_location(input)
    if input.length == 2
      if @valid_input.include? input[0]
        if @valid_input.include? input[1]
          if @board.check_location(input[0], input[1])
            return true
          else
            puts "that location is already taken"
            return false
          end
        else
          puts "your second input must be 1 2 or 3"
          return false
        end
      else
        puts "your first input must be A B or C"
        return false
      end
    else
      puts "your input must only contain 2 characters. examples A1"
      return false
    end
  end

  def check_for_winner()
    if @round >= 5
      @winning_locations.each do |lines|
        line_value = Array.new()
        lines.each do |y, x|
          line_value.push(@board.board[y][x])
        end
        if line_value.all? {|value| (value == line_value[0] && value != " ")}
          @winner = @turn
          @is_winner = true
        end
      end
    end
    if @is_winner
      puts "Well done player #{@winner}, you have won"
    else
      check_for_draw() 
    end

  end

  def check_for_draw()
    board = Array.new()
    @board.board.each do |lines|
      lines.each do |value|
        board.push(value)
      end
    end
    if board.all? {|value| value != " "}
      @is_winner = true
      puts "its a draw"
    end
  end
end

game = Game.new()
game.start()