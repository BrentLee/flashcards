(function(App){
	App.DecksController = Ember.ArrayController.extend({
		deleteDeck: function(deck){
			deck.deleteRecord();
			deck.store.commit();
		}
	});
}(window.App = window.App || {}));