(function(App){
	App.DecksController = Ember.ArrayController.extend({
		actions: {
			deleteDeck: function(deck){
				deck.deleteRecord();
				this.transitionToRoute('decks');
			}
		}	
	});
}(window.App = window.App || {}));