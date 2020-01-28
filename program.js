require('es6-promise')
const process = require('process')

const all = (promise1, promise2) => {
  let data = [];
  return new Promise((resolve, reject) => {
    return promise1.then((response) => {
      data.push(response);
      return promise2.then((response) => {
        data.push(response)
        resolve(data);
      });
    });
  });
}
all(getPromise1(), getPromise2()).then((response) => {
  console.log(response);
});