var App = require('./app');

App.Router.map(function() {
	this.resource('sessions', { path: '/profile' }, function(){
		this.route('new', { path: '/login' });
	});
	this.resource('users', function(){
		this.route('new', { path: '/register' });
	});
	this.route('top_secret');
});

