var AuthenticatedRoute = require('./authenticated_route');
var User = require('../models/user');

var TopSecretRoute = AuthenticatedRoute.extend({
	model: function(){
		return this.store.findAll('user');
	}
});

module.exports = TopSecretRoute;