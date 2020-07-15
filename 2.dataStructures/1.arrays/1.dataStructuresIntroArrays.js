// arrays

// RAM v persistent storage

// 1 | 01010101 - 1 byte 8 bits
// 2 | 01010101
// 3 | 01010101
// 4 | 01010101

const arr = ["first element", 1, "new element", 2, 3, 4]; // O(1)

// arr.splice(2, 0, "new element");
arr.pop(); // O(1)
arr.unshift("first element"); // O(n)

console.log(arr);

// youtube link
//https://www.youtube.com/watch?v=JktmexZkqWM&list=PLeLwVYBodOL0npQy3bHOOAGH-6Uf-HY2d&index=6
