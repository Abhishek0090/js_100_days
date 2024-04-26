//// write a fn called simplePasswordValidator that takes a single parameter

// let conditions : {
//     condition1: this.str.
// }

    // if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    //   hasUpperCase = true;
    // } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    //   hasLowerCase = true;
    // } else if (isNaN(Number(char))) {
    //   hasNumber = true;
    // }


const checkPassword = (pass) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;

  for (let char of pass) {
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    } else if (!isNaN(parseInt(char))) {
      hasNumber = true;
    }
  }

  if (!hasLowerCase || !hasUpperCase || !hasNumber || pass.length < 8) {
    return "Invalid Password";
  }

  return "Valid Password";
};

console.log(checkPassword("Abhishek99"));
