module Enumerable
  def my_each
    return to_enum(:my_select) unless block_given?
    i = 0
    until i == self.size
      yield self[i]
      i+=1
    end
  end

  def my_each_with_index
    return to_enum(:my_select) unless block_given?
    i = 0
    until i == self.size
      yield(self[i], i)
      i+=1
    end
  end

  def my_select
    return to_enum(:my_select) unless block_given?
    selection = []
    self.my_each {|value| selection << value if yield(value)} 
    selection
  end

  def my_all?
    if block_given?
      self.my_each {|i| return false unless yield i}
    else
      self.my_each {|i| return false unless i}
    end
    true
  end

  def my_any?
    if block_given?
      self.my_each {|i| return true if yield i}
    else
      self.my_each {|i| return true if i}
    end
    false
  end

  def my_none?
    if block_given?
      self.my_each {|i| return false if yield i}
    else
      self.my_each {|i| return false if i}
    end
    true
  end

  def my_count(arg = nil)
    count = 0
    if block_given?
      self.my_each {|i| count+=1 if yield i}
    elsif !arg.nil?
      self.my_each {|i| count+=1 if arg == i}
    else 
      self.my_each {|i| count +=1}
    end
    count
  end

  def my_map(arg=nil)
    new_array = []
    if block_given?
      self.my_each {|i| new_array << yield(i)}
    elsif !arg.nil?
      self.my_each {|i| new_array << arg.call(i)} 
    else
      return to_enum(:my_map)
    end
    new_array
  end

  def my_inject(arg1=nil, arg2=nil)
    injector = nil
    if block_given? && arg1==nil
      injector = self.first
      self.drop(1).my_each {|i| injector = yield injector,i}
    elsif !block_given? && arg1.kind_of?(Symbol)
      injector = self.first
      self.drop(1).my_each {|i| injector += i} if arg1==:+
      self.drop(1).my_each {|i| injector -= i} if arg1==:-
      self.drop(1).my_each {|i| injector *= i} if arg1==:*
      self.drop(1).my_each {|i| injector /= i} if arg1==:/
    elsif !block_given? && arg1 != nil && arg2.kind_of?(Symbol)
      injector = arg1
      self.my_each {|i| injector += i} if arg2==:+
      self.my_each {|i| injector -= i} if arg2==:-
      self.my_each {|i| injector *= i} if arg2==:*
      self.my_each {|i| injector /= i} if arg2==:/
    elsif block_given? && arg1 != nil
      injector = arg1
      self.my_each {|i| injector = yield injector,i}
    else
      return to_enum(:my_inject)
    end
    injector
  end

end

puts "my_each vs. each"
numbers = [1, 2, 3, 4, 5]
numbers.my_each_with_index  { |item, index| puts "#{item} + #{index}" }
numbers.each_with_index  { |item, index| puts "#{item} + #{index}" }
puts "my select"
puts numbers.my_select { |item| item > 3}
puts numbers.select { |item| item > 3 }
puts "my all"
puts numbers.my_all? { |item| item > 3}
puts numbers.all? { |item| item > 3}