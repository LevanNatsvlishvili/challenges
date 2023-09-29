// Challenge 11
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// Output:1,2,3

Promise.resolve('one')
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(result + ' two'), 1000);
    });
  })
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
