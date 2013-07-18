App.DeckController = Ember.ObjectController.extend({
	rightAnswer: function(id){
		alert(id + ' right');
	},

	wrongAnswer: function(id){
		alert(id + ' wrong');
	}
});