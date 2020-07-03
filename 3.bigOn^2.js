// O(n^2)

const arr = ["a", "b", "c", "d"];

function logAll(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log([arr[i], arr[j]]);
      count++;
    }
  }
  console.log(count);
}

logAll(arr);
