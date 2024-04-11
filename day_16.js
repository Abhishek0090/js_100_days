// Write a fn that takes an array of numbers as an input and returns the minimum value founbd in the array

const findMin = (arr) => {
  //   arr = arr.sort((a, b) => b - a);

  //   return arr;
  return Math.min(...arr);
};

console.log(findMin([1, 5, 2, 8]));
