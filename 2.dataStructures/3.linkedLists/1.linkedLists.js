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

  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.prepend(data);
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
  }

  printList() {
    let count = 0;
    let current = this.head;
    const result = [];
    while (count < this.length) {
      result.push(current.data);
      current = current.next;
      count++;
    }
    return result;
  }

  reverse() {
    if (!this.head) {
      return -1;
    } else {
      let current = this.head;
      let count = 0;
      while (count < this.length) {
        current.next.next = current;
        current = current.next;
        count++;
      }
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;

      return this;
    }
  }

  showProps() {
    return `Length: ${this.length} || Head value: ${this.head.data} || Tail value: ${this.tail.data}`;
  }
}

const list = new LinkedList();
list.prepend("First node");
list.prepend("new head");
list.prepend("Final new head");
list.append("New tail");
list.append("Final new tail");
console.log(list.reverse());
console.log(list.head.next);
