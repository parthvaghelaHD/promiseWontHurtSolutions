require('es6-promise')
const process = require('process')

const parsePromised = (json)=> {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error);
    }
  });
}

const onReject = (error)=> {
  console.log(error.message);
}


parsePromised(process.argv[2])
.then(null, onReject)
.catch((e)=> {
  throw e
})


