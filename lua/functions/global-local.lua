-- Functions are first-class, may be local/global

-- Global
function f(x) return x * x end
f = function (x) return x * x end

-- Local
local function g(x) return math.sin(x) end
local g; g = function x() return math.sin(x) end -- the 'local g' declare makes g self references ok
