greeting = "Hello"

greet = fn
   (^greeting, name) -> IO.puts("Hi #{name}")
   (greeting, name) -> IO.puts("#{greeting}, #{name}")
end

greet.("Hello", "Sean")
greet.("Mornin'", "Sean")
