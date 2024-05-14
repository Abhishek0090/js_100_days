// Create a function to validatepassword thats check if password string meets the following criteria  :

// least 8 characters
// must include at least one uppercase and lowercase
// must consist one digit
// must consist one special character

const validatepassword = (password) => {
  const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}/;

  return regex.test(password)
};
console.log(validatepassword("abhsieh"));
console.log(validatepassword("Abhi@9999"));
console.log(validatepassword("abhi@999"));
console.log(validatepassword("ab.@999"));
console.log(validatepassword("12312312"));
