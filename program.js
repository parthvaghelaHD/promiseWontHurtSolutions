require('es6-promise');

const promises = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error){
  console.log(error.message)
}
promises.then(console.log, onReject)