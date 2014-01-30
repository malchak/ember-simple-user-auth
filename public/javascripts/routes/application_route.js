var AuthManager = require('../config/auth_manager');

var ApplicationRoute = Ember.Route.extend({
	init: function(){
		this._super();
		App.AuthManager = AuthManager.create();
	},

	actions: {
		logout: function(){
			App.AuthManager.reset();
			this.controllerFor('sessions.new').set('loginErrors', null);
		}
	}
});

module.exports = ApplicationRoute;

