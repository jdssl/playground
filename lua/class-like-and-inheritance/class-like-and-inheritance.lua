------------------------------------
-- Class-like tables and inheritance
------------------------------------

Cat = {}

function Cat:new()
	local newObj = {sound = 'miau'}
	self.__index = self
	return setmetatable(newObj, self)
end

function Cat:makeSound()
	print('I say ' .. self.sound)
end
local mrCat = Cat:new()
mrCat:makeSound()

------------------------------
-- Inheritance
------------------------------

LoudCat = Cat:new()

function LoudCat:makeSound()
	local s = self.sound .. ' '
	print(s .. s .. s)
end
local ldCat = LoudCat:new()
ldCat:makeSound()

-- Subclass's

function LoudCat:new()
	local newObj = {}
	self.__index = self
	return setmetatable(newObj, self)
end
local sbCat = LoudCat:new()
-- sbCat.makeSound() -- FAIL attempt to index a nil value (local 'self')

