(function(App){
	App.Router.map(function(){
		this.route('about');
		this.route('signIn');
		this.route('createAccount');
		this.route('createAccountEmail');
		this.resource('deck', {path:"deck/:deck_id"}, function(){
			this.route('card', {path:"card/:card_id"});
			this.route('addCard');
		});

		this.resource('decks', function(){
			this.route('createDeck');
			this.route('editDeck', {path:"edit/:deck_id"});

			this.resource('decks.deck', {path:":deck_id"});
		});
	});
}(window.App = window.App || {}));