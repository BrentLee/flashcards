(function(App){
	App.DecksRoute = Ember.Route.extend({
		model: function(){
			return App.Deck.find();
		}
	});
}(window.App = window.App || {}));