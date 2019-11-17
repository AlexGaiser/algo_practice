function order(words: string): string {
  const wordArr: string[] = words.split(' ')
  const orderedArr: string[] = []
  
  for(let i = 1; i<= wordArr.length; i ++){
    
    const orderWord  = wordArr.find(word=>{
      return word.includes(i.toString())
    })
    
    if(orderWord){
      orderedArr.push(orderWord)
    }
    
  }
  let orderedString: string = orderedArr.join(' ')


  return orderedString;
}


module.exports = order

