export const decounce = (fn, delay = 3000) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    } else {
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  };
};
