// Palindrome Checker:
// Write a function that checks whether a given string is a palindrome (reads the same backward as forward). Ignore punctuation, spaces, and capitalization.


const isPalidrome = (str)=>{
    str = str.toLowerCase();

  const reve_str = str.split("").reverse().join("");

  return reve_str === str ? true : false;
}



console.log(isPalidrome("Pop"))