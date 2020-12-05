// Write twoSum

const twoSum = (arr, sum) => {
  const numObj = {};
  let needed;

  for (let i = 0; i < arr.length; i++) {
    needed = sum - arr[i];
    if (numObj[needed]) {
      return [numObj[needed], i];
    }
    numObj[arr[i]] = i;
  }
  return null;
};

const arr = [1, 2, 3, 4, 5];
const sum = 7;

console.log(twoSum(arr, sum));
