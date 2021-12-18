local function clousureFunction(x)
	return function (y) return x + y end
end

local result1 = clousureFunction(5)
local result2 = clousureFunction(10)

print(result1(5))
print(result2(10))
