// Merge two sorted arrays

function mergeSorted(arr1, arr2) {
  const result = [];
  let left = 0;
  let right = 0;

  const length = arr1.length + arr2.length;

  while (result.length < length) {
    if (arr1[left] === undefined) {
      result.push(arr2[right]);
      right++;
    } else if (arr2[right] === undefined) {
      result.push(arr1[left]);
      left++;
    } else if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else {
      result.push(arr2[right]);
      right++;
    }
  }
  console.log(`Count: ${count}`);
  console.log(`Length: ${length}`);
  return result;
}

const arr1 = [1, 3, 5, 7, 9, 22, 33, 44, 55];
const arr2 = [2, 555];
console.log(mergeSorted(arr1, arr2));

// YOutube link
// https://www.youtube.com/watch?v=lh1NHPUUTCk&list=PLeLwVYBodOL0npQy3bHOOAGH-6Uf-HY2d&index=9
