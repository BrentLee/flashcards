App.Deck = DS.Model.extend({
	title: DS.attr('string'),
	cards: DS.hasMany('App.Card')
});

App.Deck.FIXTURES[
{
	title: C#,
	cards: []
}
];