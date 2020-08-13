// Given an array return the most common element... One that occurs the most number of times..

function mostCommon(arr) {
  const obj = {};
  let max = 0;
  let result;
  for (let number of arr) {
    if (!obj[number]) {
      obj[number] = 1;
    } else {
      obj[number]++;
    }
  }

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    }
  }
  return result;
}

const arr = [1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5];

console.log(mostCommon(arr));
