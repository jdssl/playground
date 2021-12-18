-- If, Else and Elseif

--[[
	multi-line
	comments
--]]

local num = 10

if num > 20 then
	print('over 20')
elseif s ~= 'string' then -- ~= is not equals
	io.write('not over 20\n') -- defaults to stout
else
	local thisIsGlobal = 1 -- Variables are global by default.

	-- Variable local
	local line = io.read() -- reads next stdin line

	print('String concatenation, ' .. line)
end

