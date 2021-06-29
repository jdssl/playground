list = ["duck", "dog", "cat"]

# all?
Enum.all?(list, fn(s) -> String.length(s) > 3 end) # true

# any -> Will return true if at leat one item evaluates to true
Enum.any?(list, fn(s) -> String.length(s) == 3 end) #true

# chunk_every
Enum.chunk_every([1, 2, 3, 4, 5, 6], 3) # [[1, 2, 3], [4, 5, 6]]

# chunk_by
Enum.chunk_by(
    ["one", "two", "three", "four", "five"],
    fn(x) -> String.length(x)
end)# [["one", "two"], ["three"], ["four", "five"]]

# each
Enum.each(list, fn(s) -> IO.puts(s) end)
#duck
#dog
#cat
#:ok

# map
Enum.map([0, 1, 2, 3], fn(x) -> x - 1 end) # [-1, 0, 1, 2]

# filter
Enum.filter([1, 2, 3, 4], fn(x) -> rem(x, 2) == 0 end) # [2, 4]

# reduce
Enum.reduce([1, 2, 3], 10, fn(x, acc) -> x + acc end) # 16

# Capture Operator

Enum.map([0, 1, 2, 3], &(&1 - 1)) # [-1, 0, 1, 2]

########################

plus_three = &(&1 + 3)
Enum.map([1, 2, 3], plus_three) # [4, 5, 6]

########################

defmodule Adding do
  def plus_three(number), do: number + 3
end

Enum.map([1,2,3], fn number -> Adding.plus_three(number) end) # [4, 5, 6]

Enum.map([1,2,3], &Adding.plus_three(&1)) # [4, 5, 6]

Enum.map([1,2,3], &Adding.plus_three/1) # [4, 5, 6]
