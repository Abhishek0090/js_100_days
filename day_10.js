// console.log("DAY 10 of js")

// Write  a function arrayareequal that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e contain the same elements in the same order ) , and false otherwise

// Note it should return false if its length is not equal

const arrayAreEqual =  (arr1, arr2)=>{

    if (arr1.length !== arr2.length) return;

    let isSameArray = false;

   isSameArray = arr1.every((item, idx) => item === arr2[idx]);

    return isSameArray;
}


// Example

console.log(arrayAreEqual([1, 3, 2], [1, 3, 2])); // true
// console.log(arrayAreEqual([1, 2, 3], [1, 2, 4])); // false
// console.log(arrayAreEqual([], [])); // true