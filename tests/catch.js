/*
to run> node tests/catch
*/

const obj = require('./testObj')

// adds func that throws Test error
obj.throwError = function (arr, fun) {
	throw ('Test error')
}

const fl = require('../index.js')(obj)

const r = fl([1, 2, 3]).throwError().do(console.log)._


console.log(r);