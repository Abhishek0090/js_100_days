// Find the Missing Number:
// Write a function to find the missing number in a given integer array of 1 to N. The array will have numbers from 1 to N in random order, with one number missing.



 
const findMissing = (arr) => {
    const n = arr.length + 1; // Since one number is missing, the array length is n-1
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
}

// Example usage:
const array = [1, 3, 4, 6, 2, 7, 8]; // Array with one missing number (5)
console.log(findMissing(array)); // Output: 5
