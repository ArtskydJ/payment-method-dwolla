// Joseph Dykstra
// 2014-02-06

//Constructor
module.exports = function SimpleDwollaWrapper(token, pin) {
	var dwolla = require('dwolla')
	return {
		charge: function charge(destId, amount, cb) {
			dwolla.send(token, pin, destId, amount, cb)
		},
		
		details: function details(viewId, cb) {
			return null
		},
		
		id: "dwolla"
	}
}
