//*.
//* Programming Question: Hash Tag Generator
//*-

//? You are required to implement a function generateHash that generates a hash tag from a given input string.
// The hash tag should be constructed as follows:
// ? The input string should be converted to a hash tag format, where each word is capitalized and concatenated
// together without spaces.


//? If the length of the input string is greater than 280 characters or if the input string is empty or
// contains only whitespace, the function should return false.


//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.



const generateHash = (value)=>{
  if (value.length > 280 || value.trim().length === 0) {
    return false;
  }

  let tempVal;

  tempVal = value.split(" ");

  // My Solution
  tempVal = `#${tempVal
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join("")}`; 

  // Other Solution

  // tempVal = tempVal.map((currentElement) =>
  //   currentElement.replace(currentElement[0], currentElement[0].toUpperCase())
  // );
  // tempVal = `#${tempVal.join("")}`;

  // Last Solution


//   tempVal = tempVal.map(
//     (currentElement) =>
//       currentElement.charAt(0).toUpperCase() + currentElement.slice(1)
//   );
//   tempVal = `#${tempVal.join("")}`;

  return tempVal;
}



console.log(generateHash("my name is abhishek pal"));
//o/p="#MyNameIs ThapaTechnical"
