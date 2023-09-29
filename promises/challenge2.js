// Challenge 2

console.log('start');
const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});
promise2.then((res) => {
  console.log(res);
});
console.log('end');

// Output:start, 1, end, 2
