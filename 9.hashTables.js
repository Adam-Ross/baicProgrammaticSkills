// Make a hash function.

function hash(key) {
  let hash = 0;
  // iterate through the key
  for (let i = 0; i < key.length; i++) {
    let char = key.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }

  return hash;
}

console.log(
  hash(
    "test is the string that we have entered and now we are making it longee"
  )
);

// Yotube video link...
// https://www.youtube.com/watch?v=nMZmbhq3hbU&t=328s
