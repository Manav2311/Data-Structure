class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(element) {
    this.item.push(element);
    return this.item;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    } else {
      this.item.shift();
      return this.item;
    }
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    } else {
      return this.item[0];
    }
  }

  isEmpty() {
    return this.item.length === 0;
  }
}

let obj = new Queue();
console.log(obj.isEmpty()); 
console.log(obj.item); 
console.log(obj.enqueue(1)); 
console.log(obj.enqueue(2)); 
console.log(obj.enqueue(3)); 
console.log(obj.enqueue(4)); 
console.log(obj.enqueue(5)); 
console.log(obj.enqueue(6)); 
console.log(obj.isEmpty()); 
console.log(obj.item); 
console.log(obj.dequeue()); 
console.log(obj.dequeue()); 
console.log(obj.dequeue()); 
console.log(obj.dequeue()); 
console.log(obj.dequeue()); 
console.log(obj.dequeue()); 
console.log(obj.isEmpty()); 
console.log(obj.item); 
console.log(obj.front());