(function(App){
	App.DeckEditDeckRoute = Ember.Route.extend({
		model: function(params){
			return App.Deck.find(params.id);
		}
	});
}(window.App = window.App || {}));