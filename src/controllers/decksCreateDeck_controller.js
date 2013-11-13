(function(App){
	App.DecksCreateDeckController = Ember.ArrayController.extend({
		actions: {
			createDeck: function(){
				var title = this.get('newTitle');
				if (!title.trim()) { return; }

				var description = this.get('newDescription');

				var deck = this.get('store').push('deck', {
					id: 444,
					title: title,
					description: description
				});

				this.set('newTitle', '');
				this.set('newDescription', '');

				deck.save();
				this.transitionToRoute('decks.editDeck', deck);
			}
		}
	});
}(window.App = window.App || {}));