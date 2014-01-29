var AuthManager = require('../config/auth_manager');

var ApplicationRoute = Ember.Route.extend({
	init: function(){
		this._super();
		App.AuthManager = AuthManager.create();
	}
});

module.exports = ApplicationRoute;

