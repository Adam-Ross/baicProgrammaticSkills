// code out array from scratch

class TestArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    this.shiftIndex(index);
  }

  shiftIndex(index) {
    for (let i = index; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.data.length - 1];
    this.length--;
  }
}

const arr = new TestArray();
arr.push("First Element");
arr.push("Second element");
arr.push("Last element");

// Youtube link
// https://www.youtube.com/watch?v=jV7vxqcHCQk&list=PLeLwVYBodOL0npQy3bHOOAGH-6Uf-HY2d&index=7
