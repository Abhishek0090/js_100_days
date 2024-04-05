// Factorial Calculation:
// Write a function to calculate the factorial of a given integer. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.


const factorial = (number)=>{
    let fact = 1;
  
    for (let i = 1; i <= number; i++) {
      fact = fact * i;
    }
    return fact;
  }
  console.log(factorial(5));