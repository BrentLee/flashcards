(function(App){
	App.DeckRoute = Ember.Route.extend({
		setupController: function(controller, model){
			controller.set('content', model);
		}
	});
}(window.App = window.App || {}));