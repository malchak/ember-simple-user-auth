var AuthenticatedRoute = Ember.Route.extend({
	beforeModel: function(){
		if (!App.AuthManager.isAuthenticated()){
			this.redirectToLogin(transition);
		}
	},

	redirectToLogin: function(transition){
		var sessionNewController = this.controllerFor('sessions.new');
		sessionNewController.set('attemptedTransition', transition);
		this.transitionTo('sessions.new');
	},

	actions: {
		error: function(reason, transition) {
			this.redirectToLogin(transition);
		}
	}
});

module.exports = AuthenticatedRoute;

