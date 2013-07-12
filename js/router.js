App.Router.map(function(){
	this.resource('decks', function(){
		this.resource('deck', {path:":deck_id"});
	});
});

App.DecksRoute = Ember.Route.extend({
	model: function	(){
		return App.Deck.find();
	}
});