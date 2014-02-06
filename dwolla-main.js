// Joseph Dykstra
// 2014-02-06

//Constructor
module.exports = function(token, pin) {
	var dwolla = require('dwolla')
	
	this.chargeCreate = function(destinationId, amount, func) {
		dwolla.send( token, pin, destinationId, amount, func)
	}
}
