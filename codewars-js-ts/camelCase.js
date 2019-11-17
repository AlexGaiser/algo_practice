import { isModuleDeclaration } from "@babel/types"

const camelCase = (str) => {
  
  let strArr = []
  let camelArr = []

  if(str.includes('-')){
    strArr = str.split('-')
  }

  else if(str.includes('_')) {
    strArr = str.split('_')
  }

  camelArr.push(strArr[0])

  for(let i = 1; i < strArr.length; i ++) {
    let word = strArr[i]
    let camelWord =  word[0].toUpperCase() + word.slice(1,word.length)
    camelArr.push(camelWord)
  }
  const camelString = camelArr.join('')
  camelString
  return camelString
}


module.exports = camelCase