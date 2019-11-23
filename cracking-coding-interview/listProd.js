
// this solution will be o(n^2)
const listProd1 = (list) => {
  const prodList = []
  
  for(let i = 0; i < list.length; i++) {
    
    let prod = 1
    for(let j = 0; j < list.length; j++){
      if(j != i) {

        prod *= list[j]
        console.log(prod)
      }
    }
    
    prodList.push(prod)
  }
   
  return prodList
}

console.log(listProd1([1,7,3,4]))


const listProd2 = (list) =>{
  const memo  = {}
  let productSoFar = 1;
  const prodListBeforeIndex = []
  const prodListAfterIndex = []

  prodList = []
  
  for(let i = 0; i < list.length; i++ ) {
    
    console.log(list[i])
    prodListBeforeIndex[i] = productSoFar
    prodListBeforeIndex
    productSoFar *= list[i]

  }
  return 
}

listProd2([3, 1, 2, 5, 6, 4])

// this solution is o(n)

