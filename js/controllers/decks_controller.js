(function(App){
	App.DecksCreateDeckController = Ember.ArrayController.extend({
		createDeck: function(){
			var title = this.get('newDeckTitle');
			if (!title.trim()) { return; }

			var deck = App.Deck.createRecord({
				title: title
			});

			this.set('newDeckTitle', '');
			deck.save();
			alert(deck.id);
		}
	});
}(window.App = window.App || {}));