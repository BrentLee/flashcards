(function(App){
	App.DeckController = Ember.ObjectController.extend({
		model: function(){
			alert('in model');
			return this.get('model');
		},
		
		nextCard: function(index){
			var tempIndex = index+1;
			alert('tempIndex= '+ tempIndex);
			var card = this.model.get('cards').nextObject(tempIndex);
			card.index = tempIndex;
			this.set('currentCard', card);
		},

		previousCard: function(index){
			var tempIndex = index - 1;
			alert('tempIndex= '+ tempIndex);
			var card = this.model.get('cards').nextObject(tempIndex);
			card.index = tempIndex;
			this.set('currentCard', card);
		},

		currentCard: Ember.computed(function(){
			var cards = this.model.get('cards');
			var currentCard = cards.objectAt(0);
			currentCard.index = 0;
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