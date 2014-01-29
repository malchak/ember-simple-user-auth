var User = require('../../models/user');

var UsersNewRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this.controller.set('model', this.store.createRecord('user'));
	}
});

module.exports = UsersNewRoute;

