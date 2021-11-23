function clousureFunction(x)
	return function (y) return x + y end
end

result1 = clousureFunction(5)
result2 = clousureFunction(10)

print(result1(5))
print(result2(10))
