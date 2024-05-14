function throttle(func, delay) {
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCallTime >= delay) {
      func.apply(this, args);
      lastCallTime = now;
    }
  };
}





function sayHello() {
  console.log("Hello!");
}

const throttledSayHello = throttle(sayHello, 1000); // Throttle to one call per second

throttledSayHello(); // Logs "Hello!"
throttledSayHello(); // Ignored
setTimeout(throttledSayHello, 500); // Ignored
setTimeout(throttledSayHello, 1000); // Logs "Hello!"
