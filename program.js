require('es6-promise');

const promise = Promise.reject(new Error('error'))
.then((error) => {
  console.log(error.message)
})
.catch((error) => {
  console.log(error.message)
})