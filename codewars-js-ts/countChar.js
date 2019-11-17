
const countChar = (str) => {
  const strArr = str.split('')

  strArr

  const countObj = {}

  for(let i = 0; i < strArr.length; i++) {
    if(countObj[strArr[i]] ) {
      countObj[strArr[i]] +=1
    }
    else {
      countObj[strArr[i]] = 1
    }
  }

  countObj
  return countObj
}


// could also be done with a ternary operator

//count[s] ? count[s]++ : count[s] = 1;


const countDuplicates = (text) =>{
  let count = 0
  const indItems  = []
  const duplicates = []


  text.toLowerCase().split('').forEach(elem => {
    if(!indItems.includes(elem)){
      indItems.push(elem)
    }
    else if(!duplicates.includes(elem)){
      duplicates.push(elem)
    }
    
  });

  indItems
  duplicates
  return duplicates.length
}

countDuplicates('Bb1111bbbccaa')
