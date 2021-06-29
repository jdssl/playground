cond do
    2 + 2 == 5 ->
        IO.puts("This will not be true")
    2 * 2 == 3 ->
        IO.puts("Nor this")
    1 + 2 == 3 ->
        IO.puts("But this will")
end


cond do
    2 + 2 == 5 -> IO.puts("Incorrect")
    true -> IO.puts("TRUE")
end
