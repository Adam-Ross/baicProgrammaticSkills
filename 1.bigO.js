// linear time O(n)
function linear(arr) {
  arr.forEach((elem) => {
    console.log(elem);
  });
}

// Constant time O(1)
function constant(arr) {
  return arr[0];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
linear(arr);
