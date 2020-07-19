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

  print() {
    const result = [];
    let counter = 0;
    let current = this.head;

    while (counter < this.length) {
      result.push(current.data);
      current = current.next;
      counter++;
    }
    return result;
  }

  getProps() {
    return `Length: ${this.length} || Head: ${this.head.data} || Tail: ${this.tail.data}`;
  }

  append(data) {
    if (!this.head) {
      this.prepend(data);
    } else {
      const node = new Node(data);
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
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
list.append("New test tail");
list.append("final test tail");
console.log(list.print());
