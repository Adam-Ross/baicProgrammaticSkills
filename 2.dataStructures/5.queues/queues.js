// Code out queue
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    // Show's first node in q

    if (!this.first) {
      return null;
    }

    return this.first;
  }

  enqueue(data) {
    const node = new Node(data);
    // If there is no first, add a new first, otherwise, get in the back of the line
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    const trackingNode = this.first;
    // First person get on bus
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return trackingNode;
  }
}

const q = new Queue();
q.enqueue("First in line");
q.enqueue("2nd in line");
q.enqueue("3rd in line");
q.enqueue("4th in line");
q.dequeue();
q.dequeue();
q.dequeue();

console.log(q);
