
    temp = stack.pop()
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true



table = {
'}':'{',
']': '[',
')': '('

}

const str = '{[()]{{}}{}[]'
 = ['{',  ]

['(', '']

function validBrackets (str: string): boolean {
let isValid: boolean  = false
let stack: string[]  = [] 
let table = {
   '}':'{',
  ']': '[',
  ')': '('
}



let openers = ['{', '[', '(']



for(let i = 0; i < str.length; i ++) {
  if(openers.includes(str[i])){
    stack.push(str[i])
  }
  else {
    
  }
  
  
}

return isValid 
}




// class Stack {
// constructor() {
//   this.storage = [];    
// }
// isEmpty() {
//   return this.storage.length === 0;
// }
// push(item) {
//   this.storage.push(item);
// }
// pop() {
//   return this.storage.pop();
// }
// peek() {
//   return this.storage[this.storage.length - 1];
// }
// }

