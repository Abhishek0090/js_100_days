// Write a function to check if a given string starts with a specific substring

const startsWith = (str, substr) => {
  return str.toLowerCase().startsWith(substr.toLowerCase());
};

console.log(startsWith("Hello World", "Hllo"));
