/*
 Question : Write  a fn to find longest word in the sentence and return that word
*/


const findLongestWord = (str) => {
  if (str.trim().length === 0) return;

  // ----  First Method ----- //
  //   let words;
  // words = str.split(" ")
  // words = words.sort((a, b) => b.length - a.length);
  // return words[0];
  //

  //--- Second Method ------ //
  let words;

  words = str.split(" ");

  return words.reduce(
    (acc, item) => (acc.length > item.length ? acc : item),
    ""
  );
};


console.log(findLongestWord("Hi Bro My name is Abhishek Pal"));