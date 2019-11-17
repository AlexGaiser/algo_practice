function comp(array1, array2){
  let value
  if(array1 && array2 &&  array1.length > 0 && array2.length > 0){
      value = true
     array1.forEach(num=>{
        num
        const val = array2.includes(num * num)
        val
    
        if(!array2.includes(num * num)) {
    
          value = false
        }
    })

  }
  else {
    value = false
  }
  
  
 
  return value

}

const res = comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361])

res
