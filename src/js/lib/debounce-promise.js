/**
 * Debounces a promise
 * Usage: const debouncedFn = debouncePromise(myPromise, 500);
 * @param fn  Promise to be called
 * @param ms  Debounce interval
 * @returns {function(...[*]): Promise<any>}
 */

export default (fn, ms = 0) => {
  let timer = null;
  let resolves = [];
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const result = fn(...args);
      resolves.forEach(r => r(result));
      resolves = [];
    }, ms);
    return new Promise(r => resolves.push(r)); //eslint-disable-line
  };
};
