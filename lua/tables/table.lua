-- Tables = Lua's only compound data structure;
--          they are associative arrays.
-- Similar to php arrays or js objects, they are
-- hash-lookup dicts that can also be used as lists.

local t = { name = 'balu', age = 26 }
print(t)
print(t.name, t.age)

t.cat = 'hunter'
t.sports = {}
t.age = nil

-- Use literal notation for any (non-nil) values as key
local u = {[123] = 'qwer', [{}] = 123, [3.2] = 'bo'}
print(u[3.2])
print(u[{}]) -- return nil only strings & number are more potables keys

local function h(x) print(x.name) end
h{name = 'balu'}

for key, val in pairs(u) do
	print(key, val)
end

-- _G is a special table of all globals
print(_G['_G'] == _G)

local v = {'value1', 'value2', 12, 'qwerty'}
for i = 1, #v do
	print(v[i])
end
