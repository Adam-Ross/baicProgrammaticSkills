// Given an array of positive integers, find the greatest areas to keep water. The indices work as vertical walls along with the x axis.

// example = [1,4,3,2,5]
// 4 and 5 are the tallest walls, and have an area of
// 4 + 5 = 9
// 9 * 2 = 18

// Few notes:
// Whenever you GREATEST in the description, it's most likely a maximal value question.

// O(n*2) -> Not good enough, too expensive
const bruteForce = (arr) => {
  let maxArea = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      let height = Math.min(arr[i], arr[j]);
      let width = j - i;
      let currentArea = height * width;
      maxArea = Math.max(maxArea, currentArea);
    }
  }
  console.log(count);
  return maxArea;
};

// Refined solution / Shifting pointer
const shiftingPointer = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let maxArea = 0;
  while (i < j) {
    let height = Math.min(arr[i], arr[j]);
    let width = j - i;
    let area = height * width;
    maxArea = Math.max(area, maxArea);
    if (arr[i] <= arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

const arr = [4, 8, 1, 2, 3, 9];
console.log(shiftingPointer(arr));
