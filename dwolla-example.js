var secret = require("../stripe-and-dwolla_sensitive-info/dwolla.js")

var Main = require("./main.js")

var whatever = function(err, data) {
	if (err) {
		console.log("Error: "+err+"\nTransaction ID: "+data)
		return false
	} else {
		return true
	}
}

