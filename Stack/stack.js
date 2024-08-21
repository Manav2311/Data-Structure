/* 
Stack : (LIFO) => LAST IN FIRST OUT
*/

class Stack {
  constructor() {
    this.items = [];
  }

  pushh(element) {
    this.items.push(element);
    console.log(this.items);
  }

  popp() {
    if (this.isEmpty()) {
      return "Stack is empty ";
    }
    return this.items.pop();
  }

  peekk() {
    if (this.isEmpty()) {
      return "Stack is empty ";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stackObj = new Stack(); // stack object

console.log(stackObj.items); // []
stackObj.pushh(1); // [1]
stackObj.pushh(2); // [1,2]
stackObj.pushh(3); // [1,2,3]
stackObj.pushh(4); // [1,2,3,4]
console.log(stackObj.popp()); // 4
console.log(stackObj.items); // [1,2,3]
console.log(stackObj.peekk()); // 3
console.log(stackObj.items); // [1,2,3]

// balanced expression

function isBalanced(expression) {
  let stack = [];
  for (let char of expression) {
    // { [ ( ) ] }
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char); // { [ (
      /*
        
      */
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false;
      }
      let top = stack.pop(); // ) } ]
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));