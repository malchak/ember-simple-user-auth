var AuthManager = require('../config/auth_manager');

var ApplicationRoute = Ember.Route.extend({
	init: function(){
		this._super();
		App.AuthManager = AuthManager.create();
	},

	actions: {
		logout: function(){
			App.AuthManager.reset();
			this.transitionToRoute('index');
		}
	}
});

module.exports = ApplicationRoute;

