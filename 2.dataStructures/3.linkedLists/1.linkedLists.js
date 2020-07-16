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

  add(data) {
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
  }

  delete(index) {
    if (!this.head) {
      return -1;
    }

    if (index > this.length) {
      return "Out of bounds";
    }
  }
}

const list = new LinkedList();
list.add("test");
list.add("new head");
list.add("last head");
console.log(list);
