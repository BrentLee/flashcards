(function(App){
	App.User = DS.Model.extend({
		firstName: DS.attr('string'),
		lastName: DS.attr('string'),
		email: DS.attr('string'),
		password: DS.attr('string')
	});
}(window.App = window.App || {}));

