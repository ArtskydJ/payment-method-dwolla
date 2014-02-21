// Joseph Dykstra
// 2014-02-06

//Constructor
module.exports = function SimpleDwollaWrapper(token, pin) {

	function charge(desc, amount, obj, cb) {
		//do something with desc(ription)
		var destId = obj[id]
		require('dwolla').send(token, pin, destId, amount, cb)
	}
	
	return {
		id: 'dwolla',
		charge: charge
	}
}
