const handleDebouching = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const handleChange = () => {
  const value = document.getElementById("search_input").value;
  console.log(value);
};
