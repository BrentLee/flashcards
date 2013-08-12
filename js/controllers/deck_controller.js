(function(App){
	App.DeckController = Ember.ObjectController.extend({
		currentIndex: 0,
		
		nextCard: function() {
            var currentIndex = this.incrementProperty('currentIndex');
        },

        previousCard: function() {
            var currentIndex = this.decrementProperty('currentIndex');
        },

        currentCard: Ember.computed(function() {
            var currentIndex = this.get('currentIndex');
            var cards = this.get("model.cards");
            return cards.objectAt(currentIndex);
        }).property('currentIndex'),

		rightAnswer: function(id){
			var card = App.Card.find(id);
			card.correct = true;
			alert(id + ' ' + card.id);
		},

		wrongAnswer: function(id){
			var card = App.Card.find(id);
			card.correct = false;
			alert(id + ' wrong');
		}
	});
}(window.App = window.App || {}));