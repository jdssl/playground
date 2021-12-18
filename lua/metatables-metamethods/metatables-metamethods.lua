---------------------------------
-- Metatables and Metamethods
---------------------------------

local f1 = {a = 1, b = 2}
local f2 = {a = 2, b = 3}

-- s = f1 + f2 -- FAIL

local metafunction = {}
function metafunction.__add(f1, f2)
	local sum = {}
	sum.b = f1.b * f2.b
	sum.a = f1.a * f2.b + f2.a * f1.b
	return sum
end

setmetatable(f1, metafunction)
setmetatable(f2, metafunction)

local s = f1 + f2

print(getmetatable(f1))

local defaultFavs = {animal = 'cat', food = 'pizza'}
local myFavs = {food = 'soup'}
setmetatable(myFavs, {__index = defaultFavs})
local eatenBy = myFavs.animal
print(eatenBy)

-- Direct table lookups that fail will retry using
-- the metatable's __index value, and this recurses.

-- An __index value can also be a function(tbl, key)
-- for more customized lookups.

-- Values of __index,add, .. are called metamethods.
-- Full list. Here a is a table with the metamethod.

-- __add(a, b)                     for a + b
-- __sub(a, b)                     for a - b
-- __mul(a, b)                     for a * b
-- __div(a, b)                     for a / b
-- __mod(a, b)                     for a % b
-- __pow(a, b)                     for a ^ b
-- __unm(a)                        for -a
-- __concat(a, b)                  for a .. b
-- __len(a)                        for #a
-- __eq(a, b)                      for a == b
-- __lt(a, b)                      for a < b
-- __le(a, b)                      for a <= b
-- __index(a, b)  <fn or a table>  for a.b
-- __newindex(a, b, c)             for a.b = c
-- __call(a, ...)                  for a(...)
