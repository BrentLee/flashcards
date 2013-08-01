(function(App){
	App.DeckController = Ember.ObjectController.extend({
		currentIndex: 0,
		model: function(){
			return this.get('model');
		},
		nextCard: function(){
			this.set('this.currentIndex', this.currentIndex + 1);
		},
		previousCard: function(){
			this.set('this.currentIndex', this.currentIndex - 1);
		},
		currentCard: Ember.computed(function(){
			var cards = this.model.get('cards');
			return cards.objectAt(this.get('currentIndex'));
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