App.Card = DS.Model.extend({
	question: DS.attr('string'),
	answer: DS.attr('string'),
	deck: DS.belongsTo('App.Deck')

});

App.Store.FIXTURES = [
	{
		id: 100,
		question: '',
		answer: ''
	},
	{
		id: 101,
		question: '',
		answer: ''
	},
	{
		id: 102,
		question: '',
		answer: ''
	},
	{
		id: 200,
		question: '',
		answer: ''
	},
	{
		id: 201,
		question: '',
		answer: ''
	},
	{
		id: 202,
		question: '',
		answer: ''
	},
	{
		id: 203,
		question: '',
		answer: ''
	},
	{
		id: 300,
		question: '',
		answer: ''
	},
	{
		id: 301,
		question: '',
		answer: ''
	},
	{
		id: 302,
		question: '',
		answer: ''
	}
];