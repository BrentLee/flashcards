(function(App){
	App.IndexRoute = Ember.Route.extend({
		redirect: function(){
        	this.transitionTo('decks');
		}
	});
}(window.App = window.App || {}));