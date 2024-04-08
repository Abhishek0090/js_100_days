// Write a function to find vowels in a string

// A, E, I, O, U,

const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  let arr;

  arr = str.split("").filter((item) => item);

  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
};

console.log(findVowels("Helllo bro"));
