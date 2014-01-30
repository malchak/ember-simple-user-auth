// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/jquery.cookie');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data'); // delete if you don't want ember-data

var App = window.App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter;

module.exports = App;

