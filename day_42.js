// Write a function for credit card validation using LUHN Algorithm
// Prepare the Number:

//? Reverse the Digits:
// 100 Days of JavaScript Coding Challenges || Day #42
//? Start with the digits of the number. For example, if validating the number 79927398713.
//? Reverse the digits of the number. For the example, it becomes 31789379297.
//? Double Every Second Digit:
// Starting from the first digit, double every second digit.
// For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
// Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.
// Subtract 9 from Numbers Higher Than 9:
// If doubling the number results in a number greater than 9, subtract 9 from it.
// Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
// Sum All Digits:
// Add all the digits together.
// 3+2+7 +7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
// Check Modulo 10:
// If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.
// Example usage:

const validateCreditCard = (cardNumber) => {
  // Remove all non-digit characters from the card number
  cardNumber = cardNumber.replace(/\D/g, "");

  let revNumber = "";
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    revNumber = revNumber + cardNumber[i];
  }

  // Step 2 : Double every second digit
  let doubleNum = [...revNumber]
    .map((currentDigit, index) => {
      if (index % 2 !== 0) {
        let doubled = currentDigit * 2;
        // If the result is greater than 9, subtract 9
        return doubled > 9 ? doubled - 9 : doubled;
      } else {
        return currentDigit;
      }
    })
    .reduce((acc, item) => acc + Number(item), 0);

  // Check if the sum is divisible by 10
  if (doubleNum % 10 === 0) {
    return "Valid Credit Card";
  } else {
    return "Invalid Credit Card";
  }
};


console.log(validateCreditCard("4539 1488 0343 6467")); // Output: true
//  console.log(validateCreditCard("4399 9200 1555 8059")); // Output: false
