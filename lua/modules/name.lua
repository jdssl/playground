-----------------------
-- Module
-----------------------

local M = {}

local function sayMyName()
	print("Balu")
end

function M.sayHello()
	print('Hello')
	sayMyName()
end

return M
