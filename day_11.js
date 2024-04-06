// Write a function that takes a number as a input and returns the sum of its digits

// const sumOfDigits = (num) => {
//   if (num < 0) return;

//   // first method

//   //   let finalNum = num.toString();

//   //   finalNum = finalNum
//   //     .split("")
//   //     .reduce((acc, item) => Number(acc) + Number(item), 0);

//   //   return finalNum;

//   //second method

//   let arr = Array.from(String(num), Number);

//   return arr.reduce((acc, item) => (acc += item), 0);
// };

//without converting it into string
const sumOfDigits = (num) => {
  if (num < 0) return;
  
  let sum = 0;
  while (num > 0) {
    sum += num % 10; // Add the last digit to sum
    num = Math.floor(num / 10); // Remove the last digit
  }
  return sum;
};

console.log(sumOfDigits(1345)); // Output will be 13
