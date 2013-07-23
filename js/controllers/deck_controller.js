(function(App){
	App.DeckController = Ember.ObjectController.extend({
		rightAnswer: function(id){
			var card = App.Deck.find(id);
			card.correct = true;
			alert(id + ' ' + card.id);
		},

		wrongAnswer: function(id){
			var card = App.Deck.find(id);
			card.correct = false;
			alert(id + ' wrong');
		}
	});
}(window.App = window.App || {}));