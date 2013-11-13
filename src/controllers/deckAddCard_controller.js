(function(App){
	App.DeckAddCardController = Ember.ObjectController.extend({
		needs: 'deck',
		
		actions: {
			addCard: function(){
				var newQuestion = this.get('newQuestion');
				var newAnswer = this.get('newAnswer');

				var card = this.get('store').createRecord('card', {
					question: newQuestion,
					answer: newAnswer
				});

				this.set('newQuestion', '');
				this.set('newAnswer', '');
				card.save();

				var model = this.get('model');
				model.get('cards').addObject(card);
				model.save();
			}
		}
	});
}(window.App = window.App || {}));