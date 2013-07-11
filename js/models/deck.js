App.Deck = DS.Model.extend({
	title: DS.attr('string')
});

App.Deck.FIXTURES = [
	{
		id: 1,
		title: 'C#'
	},
	{
		id: 2,
		title: 'Physics'
	},
	{
		id: 3,
		title: 'Java'
	}
];