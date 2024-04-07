// Write a Function that takes an array of integers as input and removes any duplicate elements , returning  a new array with only the unique elements

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < i; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(1,j);
//       }
//     }
//   }

const removeDuplicates = (arr) => {
  let newArr = [...new Set(arr)];

  return newArr;
};

console.log(removeDuplicates([1, 3, 3, 4, 5, 2, 2, 4]));
