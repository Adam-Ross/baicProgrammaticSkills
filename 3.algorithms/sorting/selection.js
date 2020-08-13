// Selection sort, smallest item in list

function selectionSort(arr) {
  let smallest = arr[0];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
      }
      temp = arr[i];
      arr[i] = smallest;
    }
  }
  return arr;
}
