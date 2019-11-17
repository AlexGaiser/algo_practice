
const fizzBuzz = (number) =>{
  const fizzBuzzArr = []
  for(let i = 1; i <= number; i ++) {
    if(i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArr.push('FizzBuzz')
    }
    else if(i % 3 === 0) {
      fizzBuzzArr.push('Fizz')
    }
    else if ( i % 5 === 0) {
      fizzBuzzArr.push('Buzz')
    }

    else {
      fizzBuzzArr.push(i)
    }

  }


  return fizzBuzzArr
}

const result = fizzBuzz(10)

result


module.exports = fizzBuzz

