function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}




function saveInputValue(value) {
  console.log("Input value saved:", value);
}

const debouncedSaveInputValue = debounce(saveInputValue, 500); // Debounce to 500 milliseconds

debouncedSaveInputValue("A"); // Waits 500 milliseconds
debouncedSaveInputValue("B"); // Clears previous timer, waits another 500 milliseconds
debouncedSaveInputValue("C"); // Clears previous timer, waits another 500 milliseconds
// After 500 milliseconds from the last call, "Input value saved: C" will be logged
