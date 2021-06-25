
/*
run> node tests/test
*/

const testObj = require('./testObj')
const fl = require('../index.js')(testObj)

const r = fl([1, 3, 0, 4])
	.map(e => e / 2)
	.do(console.log)
	.do(arr => { arr.push(10) })
	.do(console.log)
	// .push(0)
	.last()
	// .add(2)
	._
console.log(r);