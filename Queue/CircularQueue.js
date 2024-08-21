class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.item = new Array(capacity);
    this.front = -1;
    this.rear = -1;
  }
  enqueue(element) {
    if ((this.rear + 1) % this.capacity === this.front) {
      return "Queue is full";
    }
    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.item[this.rear] = element;
  }

  dequeue() {
    if (this.front === -1) {
      return "Queue is empty";
    }

    let item = this.item[this.front]; // popped item

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    return item;
  }

  frontItem() {
    if (this.front === -1) return "Queue is empty";

    return this.item[this.front];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }
}

let circularQueue = new CircularQueue(4);
console.log(circularQueue.isEmpty());
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
console.log(circularQueue.isFull()); // true
console.log(circularQueue.item); // [10,20,30,40]
console.log(circularQueue.frontItem()); // 10
console.log(circularQueue.dequeue()); // 10
console.log(circularQueue.frontItem()); // 20
console.log(circularQueue.rear); // 3
console.log(circularQueue.isEmpty()); // false