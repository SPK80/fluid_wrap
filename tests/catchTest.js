/*
run> node tests/catchTest
*/

const breaken = require('./testObj')

// overrides to func that throws Test error
breaken.do = function (arr, fun) {
	throw ('breaken.do: Test error')
}

const fl = require('../index.js')(breaken)

const r = fl([1, 2, 3]).do(a => { })._


console.log(r);