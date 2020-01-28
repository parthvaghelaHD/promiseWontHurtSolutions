require('es6-promise')
const process = require('process')

var HTTP = require("q-io/http")
HTTP.read('http://localhost:1337')
.then(response => JSON.parse(response))
.then(console.log1)