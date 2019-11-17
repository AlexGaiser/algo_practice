def fizzbuzz(number):
  arr = []

  for i in range(1,number):
    if i % 5 == 0  and i % 3 == 0:
      arr.append("FizzBuzz")
    elif i % 3 == 0:
      arr.append("Fizz")
    elif i % 5 == 0:
      arr.append("Buzz")
    else:
      arr.append(i)

  return arr





