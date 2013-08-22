(function(App){
	App.DeckAddCardRoute = Ember.Route.extend({
		setupController: function(controller, model){
			controller.set('content', this.modelFor('deck'));
		}
	});
}(window.App = window.App || {}));