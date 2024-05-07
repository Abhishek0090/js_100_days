// remove duplicates from a array

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([2, 3, 4, 4, 5, 6]));
