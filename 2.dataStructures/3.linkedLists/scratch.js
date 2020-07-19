// 'this is a sentence'

function reverseString(str) {
  const result = [];
  const arr = str.split(" ");

  for (let word of arr) {
    if (word.length >= 6) {
      result.push(reverseSingleWord(word));
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
}

function reverseSingleWord(word) {
  return [...word].reduce((acc, char) => {
    return char + acc;
  }, "");
}

const str = "this is a sentence";

console.log(reverseString(str));
