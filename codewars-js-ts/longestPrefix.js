Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

function prefix(arr) {
	let prefix = ''
  arr[0].split('').forEach((item, index)=>{
    	for(let i = 0; i < arr.length; i ++){
        if(index < arr[i].length && arr[i][index]=== item){
        }
        else {
          break
        }
      }
       
  })
  return prefix
}

function longestCommonPrefix(arr) {
  const test = arr[0];
  let result = "";
  for (let i = 0; i < test.length; i++) {
    if (arr.every(str => str.length > i && str[i] === test[i])) {
			result += test[i];
    } else {
      break;
    }
  }
  return result;
}



Array.prototype.myEvery = function(testFn) {
  return this.reduce((result, curr) => {
    return result && testFn(curr);
  }, true);
}













Brian is cool










