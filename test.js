testObj = {
	map: function (arr, fun) {
		const results = []
		arr.forEach(e => {
			results.push(fun(e))
		})
		return results
	},

	do: function (arr, fun) {
		return fun(arr)
	},

	push: function (arr, el) {
		arr.push(el)
		return arr
	},

	length: function (arr) {
		return arr.length
	},

	inc: function (val) {
		return val + 1
	},

	add: function (val, a = 0) {
		return val + a
	},

	first: function (arr) {
		return arr[0]
	},

	last: function (arr) {
		return arr[arr.length - 1]
	},
}


const fl = require('./index.js')(testObj)

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