def fib(amount)
  array = []
  if amount <= 0
    yield array
  elsif amount == 1
    array.push(0)
  else 
    i = 2
    array = [0,1]
    until i > amount
      array.push(array[-2] + array[-1])
      i+=1
    end
  end
  array
end

def fib_rec(amount)
  if amount == 0 
    return [0]
  elsif amount == 1 
    return [0,1]
  else
    array = fib_rec(amount-1)
    array << array[-2] + array[-1]
  end
end

def merge_sort
end

puts fib(5)
puts fib_rec(5)