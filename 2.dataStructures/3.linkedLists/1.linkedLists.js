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
list.insert(5, "This is going to be at index 5");
console.log(list.print());
console.log(list.getProps());
list.delete(5);
console.log(list.print());
console.log(list.getProps());
