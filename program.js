require('es6-promise');

first()
.then((response) => {
  return second(response)
})
.then((response) => {
  onFulfilled(response)
})

onFulfilled((response) => {
  console.log(response)
})