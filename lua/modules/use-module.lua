local mod = require('name')

mod.sayHello()
mod.sayMyName() -- error

-- require's return values are cached so a file is
-- run at most once, even when require'd many times.

-- Suppose mod2.lua contains "print('Hi!')".
local a = require('mod2')  -- Prints Hi!
local b = require('mod2')  -- Doesn't print; a=b.

-- dofile is like require without caching:
dofile('mod2.lua')  --> Hi!
dofile('mod2.lua')  --> Hi! (runs it again)

-- loadfile loads a lua file but doesn't run it yet.
local f = loadfile('mod2.lua')  -- Call f() to run it.

-- loadstring is loadfile for strings.
local g = loadstring('print(343)')  -- Returns a function.
g()  -- Prints out 343; nothing printed before now.
