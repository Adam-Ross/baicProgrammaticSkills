// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;
  }
}

const list = new LinkedList();
list.prepend("First node");
list.prepend("new head");
list.prepend("Final new head");
console.log(list);
