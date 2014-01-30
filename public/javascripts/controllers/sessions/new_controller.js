var SesssionsNewController = Ember.ObjectController.extend({
	loginErrors: null,
	attemptedTransition: null,

	actions: {
		loginUser: function(){
			var self = this;
			var router = this.get('target');
			var data = this.getProperties('username_or_email', 'password');
			var attemptedTrans = this.get('attemptedTransition');

			$.post('/session', data, function(results){
				App.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
				if (attemptedTrans) {
					attemptedTrans.retry();
					self.set('attemptedTransition', null);
				} else {
					router.transitionTo('index');
				}
			}).fail(function(jqxhr, textStatus, error){
				if ( jqxhr.status === 401 ) {
					errs = JSON.parse(jqxhr.responseText);
					self.set('loginErrors', errs.errors);
					console.log(self.get('loginErrors'));
				}
			});
		}
	}
});

module.exports = SesssionsNewController;

