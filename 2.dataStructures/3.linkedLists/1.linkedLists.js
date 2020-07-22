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

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return -1;
    } else if (index === 0) {
      this.prepend(data);
    } else if (data === this.length) {
      this.append(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let counter = 0;

      while (counter < index - 1) {
        counter++;
        current = current.next;
      }
      let temp = current.next;
      current.next = newNode;
      newNode.next = temp;
      this.length++;
    }
    return this;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeTail() {
    let current = this.head;
    let count = 0;

    while (count < this.length - 2) {
      current = current.next;
      count++;
    }
    current.next = null;
    this.tail = current;
    this.length--;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    } else if (index === 0) {
      this.removeHead();
    } else if (index === this.length - 1) {
      this.removeTail();
    } else {
      let current = this.head;
      let count = 0;
      while (count < index - 1) {
        current = current.next;
        count++;
      }
      current.next = current.next.next;
      this.length--;
    }
  }

  reverse() {
    if (!this.head) return -1;
    // Flip the head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    // Make a few vars
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new LinkedList();
list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);

console.log(list.print());
console.log(list.getProps());
list.reverse();
console.log(list.print());
console.log(list.getProps());
