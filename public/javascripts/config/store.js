// by default, persist application data to localStorage.
require('../vendor/localstorage_adapter');

module.exports = DS.Store.extend({
  adapter: DS.RESTAdapter.create()
  //adapter: DS.LSAdapter.create()
});

