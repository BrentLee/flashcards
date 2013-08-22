(function(App){
	App.DecksCreateDeckController = Ember.ArrayController.extend({
		createDeck: function(){
			var title = this.get('newTitle');
			if (!title.trim()) { return; }

			var description = this.get('newDescription');

			var deck = App.Deck.createRecord({
				title: title,
				description: description
			});

			this.set('newTitle', '');
			this.set('newDescription', '');

			deck.save();
			this.transitionToRoute('decks.editDeck', deck);
		}
	});
}(window.App = window.App || {}));