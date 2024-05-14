function PromisePollyfill(executor) {
  let onResolve;
  let onReject;
  let resolved = false;
  let rejected = false;
  let resolvedValue;
  let rejectedValue;

  function resolve(value) {
    if (!resolved) {
      resolved = true;
      resolvedValue = value;
      if (onResolve) {
        onResolve(value);
      }
    }
  }

  function reject(value) {
    if (!rejected) {
      rejected = true;
      rejectedValue = value;
      if (onReject) {
        onReject(value);
      }
    }
  }

  this.then = function (callback) {
    return new PromisePollyfill((resolve, reject) => {
      if (resolved) {
        resolve(callback(resolvedValue));
      } else {
        onResolve = function (value) {
          resolve(callback(value));
        };
      }
    });
  };

  this.catch = function (callback) {
    return new PromisePollyfill((resolve, reject) => {
      if (rejected) {
        resolve(callback(rejectedValue));
      } else {
        onReject = function (value) {
          resolve(callback(value));
        };
      }
    });
  };

  executor(resolve, reject);
}

const examplePromise = new PromisePollyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
