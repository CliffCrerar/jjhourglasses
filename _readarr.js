
module.exports = require('fs')
.readFileSync('./array')
.toString()
.split('\n')
.map(el => el.split(' '));