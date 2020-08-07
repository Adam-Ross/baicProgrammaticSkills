// First repeating character

function bruteForce(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      counter++;
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  console.log(counter);
  return -1;
}

// Objects

function usingObjects(arr) {
  let counter = 0;
  const obj = {};

  for (let char of arr) {
    counter++;
    if (obj[char]) {
      return char;
    } else {
      obj[char] = 1;
    }
  }
  console.log(counter);
  return -1;
}

// Arrays
function usingArrays(arr) {
  const array = [];
  let count = 0;
  for (let char of arr) {
    count++;
    if (array.includes(char)) {
      return char;
    } else {
      array.push(char);
    }
  }
  console.log(count);
  return -1;
}

const arr = [1, 5, 2, 4, 5, 7, 1];

console.log(usingObjects(arr));
console.log(bruteForce(arr));
