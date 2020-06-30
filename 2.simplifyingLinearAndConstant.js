// Calculate the big O of:

function test(input) {
  let result = []; // O(1)
  const sorted = true; // O(1)
  input = input.split(""); // O(1)
  let current; // O(1)
  for (let i = 0; i < input.length; i++) {
    // O(n)
    current = input[i]; // O(n)
    result.push(current); // O(n)
  }
  return result; // O(1)
}

// O(n)

// Calculate big O of:

function test2(input) {
  const pi = 3.14; // O(1)
  let found = false; // O(1)
  let sorted = null; // O(1)
  let testCase = 0; // O(1)
  let secondCase = 1; // O(1)
  for (let i = 0; i < input.length; i++) {
    // O(n)
    otherFunctionToCall(); // O(n)
    sorted = false; // O(n)
    testCase++; // O(n)
    secondCase--; // O(n)
  }
  return testCase - secondCase; // O(1)
}

// O(n)

function test(input) {
  return true; // O(1)
}
