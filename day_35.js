// Check if object is empty or not

const checkObj = (obj) => {
  if (Object.keys(obj).length === 0) {
    return "Empty";
  } else {
    return "Not Empty";
  }
};

console.log(checkObj({ name: "", age: "" }));
