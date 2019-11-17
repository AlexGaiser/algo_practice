const bubbleSort =(arr)=>{
    l = arr.length
    for(i=0; i<l; i++){
        sort = false
        for(j=0; j<l-i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                sort = true
            }
        }
        if(sort == false){
            break
        }
    }
    return arr
}

console.log(bubbleSort([3,2,1,4,5,1025,3]))
console.log(bubbleSort([1,1,1,1,2,4,9,5,555,3,1,1]))
console.log(bubbleSort([0,55,1,3,99,15,0,0]))