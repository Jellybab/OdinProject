class Node
  include Comparable
  attr_reader :value 
  attr_reader :left 
  attr_reader :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

  def set_left(node)
    @left = node
  end

  def set_right(node)
    @right = node
  end
end

class Tree
  attr_reader :root
  def initialize(array)
    unless array.nil?
      array = array.sort.uniq
      @root = build_tree(array)
    end
  end

  def build_tree(array)
    if array.nil?
      new_node = nil
    elsif array.length == 1 
      new_node = Node.new(array[0])
    elsif array.length < 3
      new_node = Node.new(array[1])
      new_node.set_left(Node.new(array[0]))
    else
      middle = array.length / 2
      new_node = Node.new(array[middle])
      left = array[0..middle-1]
      new_node.set_left(build_tree(left))
      right = array[middle+1..array.length-1]
      new_node.set_right(build_tree(right))
    end
    new_node
  end

  def insert(value)
    inserted = false
    node = @root
    until inserted
      if value == node.value
        puts "value already in tree"
        inserted = true
      elsif value < node.value
        if node.left.nil?
          node.set_left(Node.new(value))
          inserted = true
        else
          node = node.left
        end
      else
        if node.right.nil?
          node.set_right(Node.new(value))
          inserted = true
        else
          node = node.right
        end
      end
    end
  end
  
  def delete(value)
    removed = false
    
  end

  def find(value)
  end

  def level_order()
  end

  def inorder()
  end

  def preorder()
  end

  def postorder()
  end

  def height()
  end

  def depth()
  end

  def balanced?()
  end

  def rebalance()
  end

end

test_tree = Tree.new([1,7,4,23,8,9,4,3,5,7,9,67,6345,324])

test_tree.insert(10)