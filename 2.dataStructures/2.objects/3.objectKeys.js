// Code out object class from scratch, add key

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0]);
          }
        } else {
          keys.push(this.data[i][0][0]);
        }
      }
    }
    return keys;
  }

  get(key) {
    const address = this._hash(key);
    return this.data[address];
  }
}

const hash = new HashTable(50);
hash.set("Test", 123);
hash.set("Testing for the keys", 123);
hash.set("another one", 234);
hash.set("did I just make this work", "yes");
hash.set("did I just make this work", "no");
console.log(hash.get("some key not there"));
