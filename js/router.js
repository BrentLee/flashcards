(function(App){
	App.Router.map(function(){
		this.route('about');
		this.route('signIn');
		this.route('createAccount');
		this.resource('decks', function(){
			this.route('createDeck');

			this.resource('deck', {path:":deck_id"}, function(){
				this.route('editDeck', {path: "/editDeck"});
			});
		});
	});
}(window.App = window.App || {}));