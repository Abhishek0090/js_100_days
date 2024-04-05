// Anagram Checker:
// Write a function that checks whether two given strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
const isAnagram = (str1, str2) => {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr1 = str1.toLowerCase().replace(/\s/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/\s/g, '');

    // If lengths are different, they can't be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const charCount = {};

    // Count character occurrences in first string
    for (let char of cleanStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character occurrences from second string
    for (let char of cleanStr2) {
        if (!charCount[char]) {
            // If character doesn't exist in charCount or its count is 0, return false
            return false;
        }
        charCount[char]--;
    }

    // If all characters have been matched and subtracted, strings are anagrams
    return true;
}

console.log(isAnagram("Abhishek", "kehsihba")); // Output: true
// console.log(isAnagram("Hello", "World")); // Output: false
