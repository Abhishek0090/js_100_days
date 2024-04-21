//  write a function called findmode

const findmode = (arr) => {
  let count = {};

  let maxNum = 0;
  let mode;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxNum) {
      maxNum = count[num];
      mode = maxNum;
    }
  }

  return mode;
};

console.log(findmode([1, 1, 2, 2, 2, 3, 3]));
