(function(App){
	App.DecksController = Ember.ArrayController.extend({
		deleteDeck: function(deck){
			deck.deleteRecord();
			deck.store.commit();
			deck.store.save();
			this.transitionToRoute('decks');
		}
	});
}(window.App = window.App || {}));