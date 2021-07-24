class LinkedList

  attr_reader :head
  attr_reader :tail 

  def append(value)
    new_node = Node.new(value)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      @tail.set_next_node(new_node)
      @tail = new_node
    end
  end

  def prepend(value)
    if @head.nil?
      new_node = Node.new(value)
      @head = new_node
      @tail = new_node
    else
      new_node = Node.new(value, @head)
      @head = new_node
    end
  end

  def size()
    value = 0
    unless @head.nil?
      current_node = @head
      until current_node.nil?
        value += 1
        current_node = current_node.next_node
      end
    end
    value
  end

  def at(index)
    unless @head.nil?
      counter = 0
      current_node = @head
      until counter == index
        counter+=1
        current_node = current_node.next_node
      end
      current_node
    end
  end

  def pop()
    current_node = @head
    until current_node.next_node == @tail
      current_node = current_node.next_node
    end
    current_node.set_next_node(nil)
    @tail = current_node

  end

  def contains?(value)
    current_node = @head
    found = false
    until current_node.nil? || found == true
      found = current_node.value == value ? true : false
      current_node = current_node.next_node
    end
    found
  end

  def find(value)
    current_node = @head
    found = false
    index = 0
    until current_node.nil? || found == true

      if current_node.value == value
        found = true
      else
        index += 1
        current_node = current_node.next_node
      end
    end
    if !found 
      index = nil
    end
    index
  end

  def to_s()
    current_node = @head
    to_string = ""
    complete = false
    until complete
      to_string += current_node.value.to_s
      unless current_node.next_node.nil?
        to_string += " -> "
        current_node = current_node.next_node
      else
        complete = true
      end
    end
    to_string
  end

  def insert_at(value, index)
    new_node = Node.new(value)
    current_node = @head
    current_index = 0
    until current_index == index-1
      current_index+=1
      current_node = current_node.next_node
    end
    new_node.set_next_node(current_node.next_node)
    current_node.set_next_node(new_node)
  end

  def remove_at(index)
    current_node = @head
    current_index = 0
    until current_index == index-1
      current_index+=1
      current_node = current_node.next_node
    end
    follow_on_node = current_node.next_node.next_node
    current_node.set_next_node(follow_on_node)
  end


end

class Node
  attr_reader :next_node
  attr_reader :value
  def initialize(value = nil, next_node = nil)
    @value = value
    @next_node = next_node
  end

  def set_value(value)
    @value = value
  end

  def set_next_node(node)
    @next_node = node
  end
end

list = LinkedList.new()
list.append(5)
list.prepend(7)
puts "suze after prepend " + list.size.to_s
puts "head " + list.head.value.to_s
puts "tail " + list.tail.value.to_s
puts list.at(0).value
puts list.at(1).value
puts list.to_s
list.pop
puts "list after pop " + list.size.to_s
puts list.contains?(7)
puts list.contains?(5)
puts list.head.value
puts list.tail.value
puts "finding 5 " + list.find(5).to_s
puts list.head.value
puts "finding 7 " + list.find(7).to_s
puts list.to_s

list.append(8)
puts list.to_s
list.append(9)
puts list.to_s
list.insert_at(10, 1)
puts list.to_s
list.remove_at(1)
puts list.to_s

