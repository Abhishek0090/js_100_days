// make a recursion function to solve problem for factorial

// const factorial = (num) => {
//   let fac = 1;
//   for (let i = 1; i <= num; i++) {
//     fac *= i;
//   }

//   return fac;
// };

// without recursion

// const factorial = (num) => {
//   if (num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };
// console.log(factorial(5));

const factorial = (num) => (num === 1 ? 1 : num * factorial(num - 1));

console.log(factorial(5)); // Output: 120
