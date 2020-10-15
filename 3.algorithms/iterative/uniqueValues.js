// Write a function that counts the unique values in a sorted array

// 2nd array approach

const uniqueValue = (arr) => {
  const values = [];
  for (let elem of arr) {
    if (!values.includes(elem)) {
      values.push(elem);
    }
  }
  return values.length;
};

// Multiple vars
const uniqueValueMultiplePointer = (arr) => {
  if (arr.length < 1) {
    return -1;
  }
  let i = 0;
  let count = 1;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      count++;
      i = j;
    }
  }
  return count;
};

// Other way.
const uniqueValues3rdWay = (arr) => {
  if (arr.length < 1) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

const arr = [];

console.log(uniqueValues3rdWay(arr));
