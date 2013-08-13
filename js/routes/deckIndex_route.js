(function(App){
	DeckIndexRoute = Ember.Route.extend({
		redirect: function(){
        	this.transitionTo('deck');
		}
	});
}(window.App = window.App || {}));