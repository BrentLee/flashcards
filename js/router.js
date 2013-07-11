App.Router.map(function(){
	this.resource('decks', {path: '/'});
});

App.DecksRoute = Ember.Route.extend({
	model: function	(){
		return App.Deck.find();
	}
});