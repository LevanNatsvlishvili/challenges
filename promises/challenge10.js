// Challenge 10
console.log('start'); //Sync 1

// Will run after sync and be second
const promise1 = Promise.resolve().then(() => {
  console.log('promise 1'); // Sync, Will be run immediatelly promise is entered
  const timer2 = setTimeout(() => {
    console.log('timer2'); //When promise2 is logged timer2 is started running
  }, 0);
});

// Will be run third
const timer1 = setTimeout(() => {
  console.log('timer1'); //ran fourth

  const promise2 = Promise.resolve().then(() => {
    console.log('promise2'); // Started running the promise when fourth executed
  });
}, 0);

console.log('end'); //Sync 2

// Output:start, end,promise1,timer1,promise2,timer2,
