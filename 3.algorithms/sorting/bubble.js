// Code out bubble sort

function bubbleSort(arr) {
  let temp;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [1, 2, 3, 2, 1, 2, 3, 4, 5];
console.log(bubbleSort(arr));
