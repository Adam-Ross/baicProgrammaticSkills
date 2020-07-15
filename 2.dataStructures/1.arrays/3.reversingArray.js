// Reversing a string.

// function reverse(str) {
//   if (typeof str !== "string" || str.length < 2) {
//     return "Invalid input.";
//   }

//   const arr = str.split("");
//   const n = arr.length - 1;
//   const result = [];

//   // reverse iterate through the array
//   for (let i = n; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   console.log(str);
//   return typeof result.join("");
// }

function reverse(str) {
  const arr = str.split("");
  const n = arr.length - 1;
  const midpoint = Math.floor(n / 2);

  for (let i = 0; i < midpoint; i++) {
    // flipping elements
    let temp = arr[i];
    arr[i] = arr[n - i];
    arr[n - i] = temp;
  }

  return arr.join("");
}

const str = "12345";

console.log(reverse(str));

// Youtube link
// https://www.youtube.com/watch?v=RYv2fz4a06M&list=PLeLwVYBodOL0npQy3bHOOAGH-6Uf-HY2d&index=8
