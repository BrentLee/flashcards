(function(App){
	App.DeckController = Ember.ObjectController.extend({
		actions: {
			deleteCard: function(card){
				card.deleteRecord();
				this.transitionToRoute('deck');
			}
		}	
	});
}(window.App = window.App || {}));