// Write a function to calculate the sum of squaues prresent in array

const sumOfSquares = (arr) => {
  arr = arr.reduce((acc, item) => (acc = acc + item * item), 0);

  //   let sum  = 0

  //   for (let i = 0; i <= arr.length; i++) {

  //   sum = sum + arr[i] * arr[i]
  //   }

  return arr;
};

console.log(sumOfSquares([1, 2, 3]));
