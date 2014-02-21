var secret = require("../#sensitive-info/dwolla.js")

var Dwolla = require("./dwolla-main.js")

var whatever = function(err, data) {
	var dwolla = new Dwolla(secret.token, secret.pin)
}

