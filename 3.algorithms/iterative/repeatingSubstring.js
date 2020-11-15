// For substring 'aabbcccddee' return 3, cause ccc repeats 3 times. You can assume that there will be only 1 longest repeating substring.

const maxPower = (str) => {
  let max = 0;
  let currentMax = 1;

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    if (current === next) {
      currentMax++;
    } else {
      max = Math.max(max, currentMax);
      currentMax = 1;
    }
  }
  return max;
};

const str = "aabbccdddddee";
console.log(maxPower(str));
