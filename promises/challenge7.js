// Challenge 7

console.log('start');
setTimeout(() => {
  console.log('setTimeout');
});
Promise.resolve().then(() => {
  console.log('resolve');
});
console.log('end');

// Output:start, end, resolve, setTimeout
