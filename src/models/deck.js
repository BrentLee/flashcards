(function(App){
	App.Deck = DS.Model.extend({
		title: DS.attr('string'),
		description: DS.attr('string'),
		views: DS.attr('number'),
		creator: DS.attr('string'),
		created: DS.attr('date'),
		cards: DS.hasMany('card')
	});
}(window.App = window.App || {}));

