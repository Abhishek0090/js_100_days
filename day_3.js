//* Interview Question: Count Occurrences of Character
//*-

//*-
//! Task:
//? Write a function called countChar that takes two parameters: a string and a character
// to count. The function should return the number of times the specified character appears in
// the string.
 
//todo Constraints:
 
//? The function should be case-sensitive.
 
//? The function should handle both lowercase and uppercase characters.
 
 
//? The character parameter can be any printable ASCII character (the function sho
// accept any character that is part of the ASCII character set and is printable).


const countChar = (value , targetedValue)=>{
  let count;

  //my solution

  // count = value
  //   .split("")
  //   .filter(
  //     (item) => item.toLowerCase() === targetedValue.toLowerCase()
  //   ).length;

  //alternate solution

  // count = value.split("").reduce((acc, curr) => {
  //   if (targetedValue.toLowerCase() === curr.toLowerCase()) {
  //     acc++;
  //   }
  //   return acc;
  // }, 0);

  return count;
}



console.log(countChar("Mississippi", "I")); // Output: 4