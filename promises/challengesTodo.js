Promise.race([Promise.resolve('first'), Promise.resolve('second')])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

Promise.reject(new Error('oops!'))
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

Promise.resolve('hello')
  .then((result) => result + ' world')
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
