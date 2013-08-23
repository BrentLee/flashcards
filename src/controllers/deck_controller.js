(function(App){
	App.DeckController = Ember.ObjectController.extend({
		deleteCard: function(card){
			card.deleteRecord();
			card.store.commit();
		}
	});
}(window.App = window.App || {}));