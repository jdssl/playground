pie = 3.14

case "cherry pie" do
    ^pie -> IO.puts("Not so tasty")
    pie -> IO.puts("I bet #{pie} is tasty")
    _ -> IO.puts("Catch all")
end
