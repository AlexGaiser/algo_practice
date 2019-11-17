
const tripleTrouble = (num1, num2) => {
  const num1Arr = num1.toString().split('')
  const num2Arr = num2.toString().split('')
  let output = 0
  num1Arr.forEach((item, index) => {
    
    if(item === num1Arr[index + 1] && item === num1Arr[index+2]) {
      
      num2Arr.forEach((elem, pos) => {
        if(item === elem && elem === num2Arr[pos +1]) {
          
          
          output =  1
        }
      })
    }
    
  });

  return output
}


// alternate solution using includes, more concise and readable
// from user MessierM1

function tripledouble(num1, num2) {

  // this is a !clever! way of getting an array of numbers
  // for example 
  // let test = [...Array(5).keys()]
  // test returns [0,1,2,3,4,5]
  let nums = [...Array(10).keys()];


  // What this does is gives us a list of all integers we will be comparing agains
  
  nums
  
  // then uses the .some() method to check both strings at once
  // while this obfuscates what exactly is going on in the algorithm, it 
  // is a cool use of the powerful .some() method
  return +nums.some(num => 
    // this comparison using .includes() and .repeat() is the really clever piece
    // of the problem
    num1.toString().includes(num.toString().repeat(3)) &&
    num2.toString().includes(num.toString().repeat(2))
  );
}


tripledouble(12345666, 6654321)

module.exports = tripleTrouble
