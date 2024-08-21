class Stack {
  constructor() {
    this.item = [];
    this.top = -1; // stack is empty
  }

  isEmpty() {
    return this.top < 0;
  }

  push(element) {
    this.top++; // 0
    this.item[this.top] = element;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is underflow");
      return undefined;
    }
    let popedItem = this.item[this.top]; // top poped
    this.top--;
    this.item.length--;
    return popedItem;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is underflow");
      return undefined;
    }
    return this.item[this.top];
  }

}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.item);
console.log(stack.pop());
console.log(stack.item);
console.log(stack.peek());
console.log(stack.isEmpty());