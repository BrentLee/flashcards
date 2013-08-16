(function(App){
	App.ApplicationController = Ember.Controller.extend({
		currentYear: new Date().getFullYear()
	});
}(window.App = window.App || {}));