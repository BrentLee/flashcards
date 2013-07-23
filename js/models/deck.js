(function(App){
	App.Deck = DS.Model.extend({
		title: DS.attr('string'),
		cards: DS.hasMany('App.Card')
	});

	App.Deck.FIXTURES = [
		{
			id: 1,
			title: 'C#',
			cards: [100,101,102]
		},
		{
			id: 2,
			title: 'Physics',
			cards: [200,201,202,203]
		},
		{
			id: 3,
			title: 'Java',
			cards: [300,301,302]
		}
	];
}(window.App = window.App || {}));

