// Challenge 3

onsole.log('start');
const promise3 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});
promise1.then((res) => {
  console.log(res);
});
console.log('end');

// Output:start, 1, end, 2
