(function(App){
	App.DeckController = Ember.ObjectController.extend({
		deleteCard: function(card){
			card.deleteRecord();
			card.store.commit();
			card.store.save();
			this.transitionToRoute('deck');
		}
	});
}(window.App = window.App || {}));