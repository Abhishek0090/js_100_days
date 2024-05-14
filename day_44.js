// **literals**: ordinary characters like 'a' '1', or '%'.
// **metacharacters**: characters with special meanings, like (any character), (caret)` (start of string), `$` (end of string), etc.
// **character classes**: sets of characters, like `[a-z]` for any lowercase
// letter.
// **character classes & shorthand**: In addition to specific character sets, regex includes several shorthand character classes that help match common character types:
// ### digit characters
// `\d`: matches any digit (0-9).
// `\D`: matches any non-digit.

// const str = "abhishek";
// const regex = /[a-z]+$/;
// console.log(regex.test(str));

//  PRACTITCE FOR EMAIL VALDAITON

// abhishek@gmail.com

const validateEmail = (email) => {
  const regex =
    /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+.[A-Za-z]{2,}/;

  return regex.test(email);
};

console.log(validateEmail("abhi.pal@gmail.com"));
console.log(validateEmail("abhi..pal@gmail.com"));
console.log(validateEmail("abhipal@gmail.com"));
console.log(validateEmail("abhi12@dot.com"));
console.log(validateEmail("no@domain"));
