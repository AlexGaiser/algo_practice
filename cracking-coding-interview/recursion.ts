
let count  = 0

const f = (n) =>{
  count ++
  
  if(n <= 1) {
    return 1
  }

  return f(n-1) + f(n-1) + f(n-1)
}
let num = f(5)

/*
n
n
1
a/b
log n

*/

