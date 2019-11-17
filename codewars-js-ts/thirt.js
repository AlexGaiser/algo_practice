function thirt(n){
  // your code
 n
  const thirtSeq = [1, 10, 9, 12, 3, 4]
  const nums = n.toString().split('').map(element => {
    return parseInt(element)
  });
  nums

const thirtArr = nums.map((element, index) => {
  element
  index
  nums[(nums.length- 1) - index]
  return nums[(nums.length- 1) - index] * thirtSeq[index % thirtSeq.length - 1]
 });
console.log(thirtArr)
 console.log(thirtArr.reduce((a,b) => a + b, 0))
  return thirtArr.reduce((a,b) => a + b, 0)
}



thirt(8529)
