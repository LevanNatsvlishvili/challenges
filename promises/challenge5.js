// Challenge 5

console.log('start');
// This promise doesnt get executed here because its inside a function
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });
console.log('middle');

// Thus when function is called synchronious part is executed, (1)
fn().then((res) => {
  console.log(res);
});

console.log('end');

// Output:start, middle,1, end, success
