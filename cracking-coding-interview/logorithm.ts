const logarithm =(base)=>{
  let exp = base;
  let count = 0;
  const log = (value) => {
    while(exp <= value) {
      exp *= base

      count ++
    }
    return count
}
  return log
}

const log10 = logarithm(10)
const log4 = logarithm(2)(8)

log4

const val = log10(1000)
val




