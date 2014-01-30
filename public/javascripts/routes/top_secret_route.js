var TopSecretRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('user');
	}
});

module.exports = TopSecretRoute;