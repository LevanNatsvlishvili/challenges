// Challenge 4

console.log('start');
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});
promise1.then((res) => {
  console.log(2);
});
console.log('end');

// promise1.then isn't called because resolve isnt implemented

// Output:start, 1, end, 2
