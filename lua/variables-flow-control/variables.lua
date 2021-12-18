-- Variables

local foo = anUnknownVariable -- now foo = nil
local aBoolValue = false

print(foo, aBoolValue)

if foo == nil then
	print('anUnknownVariable is equal nil')
end

-- Only nil and false are falsy; 0 and '' are true!
if not aBoolValue then print('was false') end

-- simir to the a ? b : c
local ans = aBoolValue and 'yes' or 'no'
print(ans)
