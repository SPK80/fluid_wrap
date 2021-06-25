module.exports = testObj = {
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