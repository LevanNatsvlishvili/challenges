// Challenge 8

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    // Console log in setTimeout scope are considered syncronous, therefore are run before resolve(microtask)
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

// Output:1,2,4,timerStart,timerEnd,success,
