(function(App){
	App.DecksController = Ember.ArrayController.extend({
		createDeck: function(){
			alert('create deck');
		}
	});
}(window.App = window.App || {}));