local co = coroutine

M = co.create(function(val_one, val_two)
  local temp_var_three = 10

  print("coroutine section 1", val_one, val_two, temp_var_three)

  local temp_var_one = coroutine.yield(val_one + 1, val_two + 1)
  temp_var_three = temp_var_three + val_one
  print("coroutine section 2", temp_var_one, temp_var_two, temp_var_three)

  local temp_var_one, temp_var_two = coroutine.yield(val_one + val_two, val_one - val_two)
  temp_var_three = temp_var_three + val_one
  print("coroutine section 3", temp_var_one, temp_var_two, temp_var_three)
  return val_two, "end"
end)

print("main", coroutine.resume(M, 3, 2))
print("main", coroutine.resume(M, 12,14))
print("main", coroutine.resume(M, 5, 6))
print("main", coroutine.resume(M, 10, 20))
