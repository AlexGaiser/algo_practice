const {performance} = require('perf_hooks');


const t1 = performance.now()


const fib = (n)=>{
  if(n <= 0){
    return 0
  }
  else if(n === 1) {
    return 1
  }

  else{
    const output =  fib(n-1) + fib(n-2)
    output
    return output
  }

}





const defFour =  fib(43)
console.log(defFour)
const t2 = performance.now()
console.log('Execution took ' + (t2 - t1) + 'milliseconds')
