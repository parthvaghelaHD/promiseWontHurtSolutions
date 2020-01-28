require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE')
}).then((successMsg)=> {
  console.log(successMsg)
}, null)
console.log('MAIN PROGRAM')
