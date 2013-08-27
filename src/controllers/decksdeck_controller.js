(function(App){
	App.DecksDeckController = Ember.ObjectController.extend(Ember.Evented, {
		currentIndex: 0,

		currentProgress: Ember.computed(function(){
			var currentIndex = this.get('currentIndex') + 1;
			var cards = this.get('model.cards');
			var progress =  (currentIndex / cards.get('length')) * 100;
			return 'width: '+progress+'%;';
		}).property('currentIndex'),

		nextCard: function() {
			var currentIndex = this.get('currentIndex');
			var cards = this.get('model.cards');
			var length = cards.get('length');
			if(currentIndex + 1 < length){
				this.incrementProperty('currentIndex');
			}
        },

        previousCard: function() {
        	var currentIndex = this.get('currentIndex');
        	if(currentIndex - 1 >= 0){
            	this.decrementProperty('currentIndex');
            }
        },

        currentCard: Ember.computed(function() {
            var currentIndex = this.get('currentIndex');
            var cards = this.get('model.cards');
            var card = cards.objectAt(currentIndex);
            return card;
        }).property('currentIndex'),

        activateHallo: function(){
			$('.editable').hallo({editable: true});
		},

		rightAnswer: function(id){
			var card = App.Card.find(id);
			card.set('correct', true);
			card.set('resultMessage', 'correct');
			this.nextCard();
		},

		wrongAnswer: function(id){
			var card = App.Card.find(id);
			card.set('correct', false);
			card.set('resultMessage', 'incorrect');
			this.nextCard();
		}


	});
}(window.App = window.App || {}));