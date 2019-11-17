import fizzBuzz from './fizzBuzz'

test("fizzbuzz 10 numbers", ()=>{
  expect (fizzBuzz(10)).toStrictEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'])
})

