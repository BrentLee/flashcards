(function(App){
	App.DecksRoute = Ember.Route.extend({
		model: function(){
			return this.store.find('deck');
		}
	});
}(window.App = window.App || {}));