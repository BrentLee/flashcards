(function(App){
	App.Router.map(function(){
		this.route('about');
		this.resource('decks', function(){
			this.resource('deck', {path:":deck_id"});
		});
	});
}(window.App = window.App || {}));