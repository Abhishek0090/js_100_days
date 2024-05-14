// Question :  Once Pollyfill

function once(func, context) {
  let ran;

  return function (argument) {
    if (func) {
      ran = func(context || this, argument);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => {
  console.log("Hello", a, b);
});

hello(1,2);
hello(1,2);
hello(1,2);
hello(1,2);
hello(1,2); 