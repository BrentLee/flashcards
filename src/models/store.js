(function(App){
	App.Store = DS.Store.extend({
		revision: 13,
		adapter: "DS.FixtureAdapter"
	});
}(window.App = window.App || {}));

