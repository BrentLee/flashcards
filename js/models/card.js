App.Card = DS.Model.extend({
	question: DS.attr('string'),
	answer: DS.attr('string'),
	deck: DS.belongsTo('App.Deck'),
	correct: DS.attr('boolean')
});

App.Card.FIXTURES = [
	{
		id: 100,
		question: 'Har har',
		answer: 'youll never know!'
	},
	{
		id: 101,
		question: 'Perhaps another question?',
		answer: 'Ah yes! I shall answer it!'
	},
	{
		id: 102,
		question: 'Not again!',
		answer: 'Yes.'
	},
	{
		id: 200,
		question: 'How much wood...',
		answer: 'Not that again :('
	},
	{
		id: 201,
		question: 'Marco!',
		answer: 'Polo!'
	},
	{
		id: 202,
		question: 'Magellan?',
		answer: 'No, Mapquest.'
	},
	{
		id: 203,
		question: 'Thrid times the charm...Right?',
		answer: 'Well, not exactly.'
	},
	{
		id: 300,
		question: 'A little tired of this now?',
		answer: 'Nah. Im just getting warmed up!'
	},
	{
		id: 301,
		question: 'One potato?',
		answer: 'Sure. With chili please.'
	},
	{
		id: 302,
		question: 'Yes. Finally the end.',
		answer: 'there are no endings, only new beginnings.'
	}
];