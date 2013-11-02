(function(App){
	App.Card = DS.Model.extend({
		question: DS.attr('string'),
		answer: DS.attr('string'),
		deck: DS.belongsTo('deck')
	});
}(window.App = window.App || {}));

