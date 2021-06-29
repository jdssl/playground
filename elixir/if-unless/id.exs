if String.valid?("Hello") do
    IO.puts("Valid String")
else
    IO.puts("Invalid String")
end

if "a string value" do
    IO.puts("Truthy")
end
