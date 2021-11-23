-- Tables = Lua's only compound data structure;
--          they are associative arrays.
-- Similar to php arrays or js objects, they are
-- hash-lookup dicts that can also be used as lists.

t = { name = 'balu', age = 26 }
print(t)
print(t.name, t.age)

t.cat = 'hunter'
t.sports = {}
t.age = nil

