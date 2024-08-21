class Stack {
  constructor() {
    this.items = {};
    this.top = -1;
  }
  push(element) {
    this.top++;
    this.items[this.top] = element;
  }

  pop() {
    if (this.top < 0) {
      return undefined;
    }

    let poppedElement = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return poppedElement;
  }

  peek() {
    if (this.top < 0) {
      return undefined;
    }

    return this.items[this.top];
  }

  isEmpty() {
    return this.top < 0;
  }
}

const obj = new Stack();

console.log(obj.items);
obj.push(1000);
obj.push(2000);
obj.push(3000);

console.log(obj.items);
console.log(obj.pop());
console.log(obj.items);
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.isEmpty());
node( data , next ) link node(data null)



class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(element) {
    let newNode = new Node(element); 
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }
  pop() {
    if (!this.top) {
      return undefined;
    }
    let poppedElement = this.top.data;
    this.top = this.top.next;
    return poppedElement;
  }

  peek() {
    if (!this.top) {
      return undefined;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
