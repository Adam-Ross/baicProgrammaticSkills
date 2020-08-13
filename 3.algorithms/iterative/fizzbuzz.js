// Write out fizzbuzz

// Code out fizzBuzz

// If a number % 3 === 0 -> Fizz
// If a number % 5 === 0 -> Buzz
// If a number % 3 === 0 && number % 3 === 0 -> FizzBuzz
// otherwise, we'll just print out number

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(50);
