// Challenge 12

Promise.resolve('one')
  .then((result) => {
    console.log('promise 1');
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 1000);
    });
  })
  .then((result) => console.log('promise 2'))
  .then((result) => console.log('promise 3'))
  .catch((err) => console.error(err));

// Output: promise 1, promise 2, promise 3
