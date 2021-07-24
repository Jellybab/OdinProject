def merge_sort(array)
  if array.length < 2 
    return array
  end
  middle = array.length / 2

  left = merge_sort(array[0...middle])
  right = merge_sort(array[middle..array.length])

  sorted = []

  until left.empty? || right.empty?
    left.first <= right.first ? sorted << left.shift : sorted << right.shift
  end

  sorted + left + right


end
p merge_sort([3, 4, 2, 1, 5, 0, 10, 9, 7, 8, 6])