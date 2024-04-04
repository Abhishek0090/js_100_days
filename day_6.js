
// Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

//
// Constraints:
//

// The input string may contain letters, digits, spaces, punctuation, and special characters.
// The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
// Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
// The function should return true if the input string is a palindrome and false otherwise.


﻿

// Note
// 1/ .replace(/\W/g, ""): Uses the replace() method with a regular expression (/\W/g) to remove all non-word
// characters from the string. Here:
// \W matches any non-word character (equivalent to
// [^a-zA-Z0-9_]).
// The g flag performs a global search, meaning it replaces all occurrences of non-word characters in the string.
// So, replace(/\W/g, "") replaces all non-word characters with an empty string, effectively removing them from the string.

const isPalindrome = (str)=>{
if (typeof str !== "string") return;

str = str.toLowerCase().replace(/\W/g, "");

let reve_str = str.split("").reverse().join("");

return str === reve_str ? true : false;
}

// Alternate

// const isPalindrome = (str) => {
//     if (typeof str !== "string") return;

//     str = str.toLowerCase().replace(/\W/g, "");

//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false; // If characters don't match, it's not a palindrome
//         }
//     }

//     return true; // If all characters match, it's a palindrome
// }



console.log(isPalindrome ("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("racecar")); // Output: true console.log(isPalindrome ("hello")); // Output: false