class QueueUsingTwoStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.length == 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.length == 0) {
      throw new Error("Queue is empty");
    }

    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      throw new Error("Queue is empty");
    }

    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

let obj = new QueueUsingTwoStacks();
obj.enqueue(10);
obj.enqueue(20);
console.log(obj.empty());
console.log(obj.dequeue());
console.log(obj.peek());
console.log(obj.dequeue());

console.log(obj.empty());