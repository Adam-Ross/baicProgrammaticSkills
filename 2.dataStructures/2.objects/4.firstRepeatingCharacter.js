// Return first repeating character

// Objects solution
function firstRepeating(arr) {
  const charObj = {};

  for (let char of arr) {
    if (charObj[char]) {
      return char;
    } else {
      charObj[char] = 1;
    }
  }
  return `No repeating elements...`;
}

// With arrays
function firstRepeatingWithArray(arr) {
  const repeated = [];
  for (let char of arr) {
    if (repeated.includes(char)) {
      return char;
    } else {
      repeated.push(char);
    }
  }
  return `No repeating elements...`;
}
const arr = [1, 2, 3, 5, 6];
console.log(firstRepeating(arr));
