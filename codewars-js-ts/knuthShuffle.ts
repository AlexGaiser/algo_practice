function shuffle (arr) {
  let i:number = 0
  let j: number = 0
  let tempIndex: number = null

  for (i = array.length - 1; i > 0; i -= 1) {
    
    j = Math.floor(Math.random() * (i + 1))
    
    tempIndex = arr[i]
    arr[i] = arr[j]
    arr[j] = tempIndex
  }

  return arr
}

