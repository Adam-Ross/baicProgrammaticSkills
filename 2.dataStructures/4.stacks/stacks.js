// Code out stack using linked lists
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(data) {
    // Make new top node
    const newNode = new Node(data);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    // delete top node
    if (this.length === 0) {
      return -1;
    } else if (this.length === 1) {
      let top = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;
      return this.top;
    } else {
      let top = this.top;
      this.top = this.top.next;
      this.length--;
      return this.top;
    }
  }

  peek() {
    // view top node
    return this.top;
  }
}

const stack = new Stack();
stack.push("First top");
stack.push("Second top");
stack.push("Third top");
stack.push("Fourth top");

console.log(stack.peek());
