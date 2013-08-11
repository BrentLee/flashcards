(function(App){
	App.DeckController = Ember.ObjectController.extend({
		model: function(selected){
			alert(selected);
			return this.get('model');
		},
		
		nextCard: function(index){
			var tempIndex = index+=1;
			var card = this.model.get('cards').nextObject(tempIndex);
			this.set('currentCard.index', tempIndex);
			this.set('currentCard', card);
		},

		previousCard: function(index){
			var tempIndex = index -=1;
			var card = this.model.get('cards').nextObject(tempIndex);
			this.set('currentCard.index', tempIndex);
			this.set('currentCard', card);
		},

		currentCard: Ember.computed(function(){
			var cards = this.model.get('cards');
			var currentCard = cards.objectAt(0);
			currentCard.index = this.model.get('cards').indexOf(currentCard);
			return currentCard;
		}).property('model'),

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