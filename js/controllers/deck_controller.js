(function(App){
	App.DeckController = Ember.ObjectController.extend({
		currentIndex: 0,
		
		model: function(){
			return this.get('model');
		},
		
		nextCard: function(index){
			var card = this.model.get('cards').nextObject(index++);
			this.set('currentCard', card);
			this.set('currentCard.index', index++)
		},

		previousCard: function(index){
			var card = this.model.get('cards').nextObject(index--);
			this.set('currentCard', card);
			this.set('currentCard.index', index--)
		},

		currentCard: Ember.computed(function(){
			var cards = this.model.get('cards');
			var currentCard = cards.objectAt(this.get('currentIndex'));
			currentCard.index = this.get('currentIndex');
			return currentCard;
		}).property('currentIndex', 'model'),

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