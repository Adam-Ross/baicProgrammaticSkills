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
list.insert(5, "This will be inserted at index 5");

console.log(list.print());
