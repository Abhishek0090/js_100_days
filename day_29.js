// Write a function that take two argument  [0,1,2,3,4,5]

const numberGenerator = (num1, num2) => {
  let arr = [];

  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(numberGenerator(4, 20));
