class LinkList {
  // first node create
  constructor(value) {
    this.head = {
      value: value,
      nextNode: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  // add node at the end o list
  addNextNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.nextNode = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  // traversing (read all the nodes in list)
  traversing() {
    let counter = 1;
    let currentNode = this.head; // read from starting

    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.nextNode;
      counter++;
    }
  }

  // delete any index
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;

    if (index === 1) this.head = this.head.nextNode;
    else {
      while (counter < index - 1) {
        lead = lead.nextNode;
        counter++;
      }
      let nextNode = lead.nextNode.nextNode;
      lead.nextNode = nextNode;
    }
  }

  // insert Node at any index
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;

    while (counter > index) {
      counter++;
      currentNode = currentNode.nextNode;
    }
    let nextNode = currentNode.nextNode;

    currentNode.nextNode = {
      value: value,
      nextNode: nextNode,
    };
  }
}

let linkList = new LinkList(100);
linkList.addNextNode(200);
linkList.addNextNode(300);
linkList.addNextNode(400);
linkList.addNextNode(500);
linkList.deleteNode(2);
linkList.insertNode(2, 200);

linkList.traversing();

console.log(linkList);