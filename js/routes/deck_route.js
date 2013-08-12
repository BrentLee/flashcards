(function(App){
	App.DeckRoute = Ember.Route.extend({
		setupController: function(controller, model){
			controller.set('currentIndex', 0);
			controller.set('content', model);
			controller.notifyPropertyChange('currentIndex');
		}
	});
}(window.App = window.App || {}));