//have to make sure username.length <=3
const userName = process.argv[2].slice(0, 3)
const {connect} = require('./client')
const {setupInput} = require('./input')

console.log("Connecting ...");
setupInput(connect(userName))



