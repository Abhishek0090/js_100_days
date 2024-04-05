// Array Chunking:
// Write a function that splits an array into chunks of a specified size. For example, if the array is [1, 2, 3, 4, 5] and the chunk size is 2, the output should be [[1, 2], [3, 4], [5]].

const arrayChunking = (arr, chunkSize) => {
    const chunkedArray = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }

    return chunkedArray;
}

console.log(arrayChunking([1, 3, 43, 4, 5], 2));
