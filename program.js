require('es6-promise');

const attachTitle = (value)=> {
  return 'DR. ' + value
}
const promise = new Promise((resolve,reject) => {
  resolve('MANHATTAN')
})
.then(attachTitle)
.then(console.log)