// // Code out BST
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(data) {
//     const node = new Node(data.id);
//     if (!this.root) {
//       this.root = node;
//     } else {
//       let current = this.root;
//       while (true) {
//         if (data < current.data) {
//           // Move left
//           if (!current.left) {
//             current.left = node;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else {
//           // Move right
//           if (!current.right) {
//             current.right = node;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }
// }

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
        if (data.id < current.data.id) {
          if (!current.left) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else {
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

  lookup(id) {
    if (!this.root) {
      return -1;
    }

    if (this.root.data.id === id) {
      return this.root.data;
    } else {
      let current = this.root;
      while (true) {
        if (id === current.data.id) {
          return current.data;
        }

        if (id < current.data.id) {
          // Move left
          if (!current.left) {
            return "Not found";
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            return "Not found";
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

const data = {
  name: "Mike",
  age: "24",
  id: 20,
};

const data2 = {
  name: "Mike",
  age: "34",
  id: 10,
};

const data3 = {
  name: "Mike",
  age: "34",
  id: 5,
};
const bst = new BST();
bst.insert(data);
bst.insert(data2);
bst.insert(data3);
console.log(bst.lookup(20));
