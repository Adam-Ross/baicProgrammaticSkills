// Given a sorted array of integers nums and an integer threshold, we will choose a positive integer divisor and divide all the array by it and sum the result of the division. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

// It is guaranteed that there will be an answer.

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1.
// If the divisor is 4 we can get a sum to 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).

const smallestDivisor = (nums, threshold) => {
  let left = 1;
  let right = Math.max(...nums);

  // Build function that divides and sums the array, and returns boolean based on if out put is <= threshold
  const doesPass = (divisor) => {
    const sum = nums
      .map((elem) => Math.ceil(elem / divisor))
      .reduce((acc, curr) => (acc += curr), 0);
    return sum <= threshold;
  };

  while (left < right) {
    let midpoint = left + Math.floor((right - left) / 2);
    if (doesPass(midpoint)) {
      right = midpoint;
    } else {
      left = midpoint + 1;
    }
  }
  return left;
};

const thresHold = 6;

const arr = [1, 2, 5, 9];
console.log(smallestDivisor(arr, thresHold));
