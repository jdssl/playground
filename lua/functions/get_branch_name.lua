local M = {}

function M.GetBranchName()
    for line in io.popen("git branch"):lines() do
        local m = line:match("%* (.+)$")
        if m then
            return m
        end
    end

    return ''
end

return M