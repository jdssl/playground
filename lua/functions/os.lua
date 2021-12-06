function GitBranch()
	return os.execute("git rev-parse --abbrev-ref HEAD 2>/dev/null | tr -d '\n'")
end

GitBranch()