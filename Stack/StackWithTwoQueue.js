class StackWithTwoQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(element) {
    // enqueue in the first queue
    this.queue1.push(element);
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const poppeditem = this.queue1.shift();
    // [[this.queue1 , this.queue2] = [this.queue2 , this.queue1]]
    return poppeditem;
  }
}

let obj = new StackWithTwoQueue();

obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj.queue1);
console.log(obj.queue2);
console.log(obj.pop());
console.log(obj.queue2);
