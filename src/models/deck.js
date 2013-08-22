(function(App){
	App.Deck = DS.Model.extend({
		title: DS.attr('string'),
		description: DS.attr('string'),
		views: DS.attr('number'),
		creator: DS.attr('string'),
		created: DS.attr('date'),
		cards: DS.hasMany('App.Card')
	});

	App.Deck.FIXTURES = [
		{
			id: 99,
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

