function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Argument must be an array"));
      return;
    }

    let resolvedCount = 0;
    const results = new Array(promises.length);

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}




const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

promiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});
