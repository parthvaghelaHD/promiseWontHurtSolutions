require('es6-promise')
const process = require('process')

const alwaysThrows =() => {
  throw Error("OH NOES")
}

const iterate = (integer) => {
  console.log(integer)
  return integer+1
}
Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch((error)=> {
    console.log(error.message)
  });


