(function(App){
	App.Router.map(function(){
		this.route('about');
		this.route('signIn');
		this.route('createAccount');
		this.resource('decks', function(){
			this.route('createDeck');
			this.route('editDeck', {path:"edit/:deck_id"});

			this.resource('deck', {path:":deck_id"});
		});
	});
}(window.App = window.App || {}));