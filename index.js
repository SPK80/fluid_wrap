module.exports = function wraper(module) {

	class Wrap {
		#data;

		constructor(data) {
			this.#data = data

			for (const key in module) {
				if (Object.hasOwnProperty.call(module, key) && key != "_") {
					this[key] = (...args) => {
						const result = module[key](this.#data, ...args)
						if (result) this.#data = result
						return this
					}
				}
			}
		}

		get _() { return this.#data }
	}

	return function (data) {
		return new Wrap(data)
	}
}