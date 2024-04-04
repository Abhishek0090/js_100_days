//*

//* Programming Question: Sort an Array
//*
//? Write a function to sort an array of numbers in an ascending order.

//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.

// const sortAscending = (arr)=>{
//     let currArr = [];
 
//     currArr = arr.sort((a, b) => a - b);

//     return currArr;
// }

// //console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10] console.log(typeof sortAscending[2]);




const sortAscending = (arr) => {
    let currArr = arr.slice(); // Make a copy of the original array

    for (let i = 0; i < currArr.length - 1; i++) {
        for (let j = 0; j < currArr.length - i - 1; j++) {
            if (currArr[j] > currArr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = currArr[j];
                currArr[j] = currArr[j + 1];
                currArr[j + 1] = temp;
            }
        }
    }

    return currArr;
}

// console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8, 10]
