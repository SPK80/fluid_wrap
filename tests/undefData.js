/*
to run> node tests/undefData
*/

const obj = require('./testObj')


const fl = require('../index.js')(obj)

const r = fl().do(_ => console.log('Hello'))


console.log(r);