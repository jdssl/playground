------------------------------------
-- Class-like tables and inheritance
------------------------------------

Cat = {}

function Cat:new()
	newObj = {sound = 'miau'}
	self.__index = self
	return setmetatable(newObj, self)
end

function Cat:makeSound()
	print('I say ' .. self.sound)
end
mrCat = Cat:new()
mrCat:makeSound()

------------------------------
-- Inheritance
------------------------------

LoudCat = Cat:new()

function LoudCat:makeSound()
	s = self.sound .. ' '
	print(s .. s .. s)
end
ldCat = LoudCat:new()
ldCat:makeSound()

-- Subclass's

function LoudCat:new()
	newObj = {}
	self.__index = self
	return setmetatable(newObj, self)
end
sbCat = LoudCat:new()
-- sbCat.makeSound() -- FAIL attempt to index a nil value (local 'self')

