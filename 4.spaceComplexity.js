// Space complexity looks at the memory usage of a function relative to size of the input.

function test(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(n) O(1)
    console.log(arr[i]);
  }
}

function test2(arr) {
  // O(n)
  let count = 0;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    //O(n)
    result[i] = arr[i];
    count++;
  }
  console.log(count);
  return result;
}

const arr = [1, 2, 3, 4, 5];
console.log(test2(arr));
