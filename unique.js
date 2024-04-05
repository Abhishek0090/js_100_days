// Unique Characters:
// Write a function that determines if a string has all unique characters. For example, the string "abcde" has all unique characters, but the string "hello" does not, as it contains the letter 'l' twice.


const hasUniqueCharacters = (str) => {
    const charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

console.log(hasUniqueCharacters("abcde")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
