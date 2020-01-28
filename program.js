require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

promise.then(() => {
  console.log("done");
}, function (error) {
  onReject(error);
});

const onReject = (error) => {
  console.log(error.message);
}