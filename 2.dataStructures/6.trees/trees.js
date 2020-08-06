// Code out BST
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          // Move left
          if (!current.left) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else {
          // Move right
          if (!current.right) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

const bst = new BST();
bst.insert(20);
bst.insert(30);
bst.insert(10);
bst.insert(5);
bst.insert(40);
console.log(bst);
