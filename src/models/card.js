(function(App){
	App.Card = DS.Model.extend({
		question: DS.attr('string'),
		answer: DS.attr('string'),
		deck: DS.belongsTo('App.Deck')
	});

	App.Card.FIXTURES = [
		{
			id: 100,
			question: 'C# 1, consectetur adipiscing elit. Nulla condimentum tristique metus ut pretium. ',
			answer: 'C# 1. Nam auctor lectus odio, vitae cursus dui suscipit vel.'
		},
		{
			id: 101,
			question: 'C# 2 interdum eu lacus id mollis.',
			answer: ' C# 2. Nullam ac tincidunt nulla. Vivamus non dictum leo.'
		},
		{
			id: 102,
			question: 'C# 3. Vestibulum placerat iaculis posuere.',
			answer: 'C# 3, consectetur adipiscing elit.'
		},
		{
			id: 200,
			question: 'Physics 1, in gravida ante posuere. Donec auctor lacus a volutpat congue.',
			answer: 'Physics 1, nec porta tortor rhoncus. Curabitur accumsan lorem elementum elit volutpat suscipit.'
		},
		{
			id: 201,
			question: 'Physics 2. Vestibulum dapibus et urna sed fringilla.',
			answer: 'Physics 2, in porttitor leo tincidunt.'
		},
		{
			id: 202,
			question: 'Physics 3. Morbi id facilisis urna.',
			answer: 'Physics 3. Nulla placerat est dolor, nec consequat velit interdum eget.'
		},
		{
			id: 203,
			question: 'Physics 4, eget tempus felis iaculis. Mauris scelerisque gravida vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus',
			answer: 'Physics 4. Vivamus auctor, felis eu condimentum fermentum, nulla lorem interdum tortor, id convallis risus tellus lacinia magna.'
		},
		{
			id: 300,
			question: 'Java 1. Morbi at pharetra arcu. Aliquam lacinia lectus mauris, vitae euismod augue lobortis vitae.',
			answer: 'Java 1 Maecenas nec mattis lectus.'
		},
		{
			id: 301,
			question: 'Java 2 dignissim aliquet. Donec in dictum lorem.',
			answer: 'Java 2 eleifend mi sit amet volutpat tempor.'
		},
		{
			id: 302,
			question: 'Java 3 non mi pellentesque dictum. Cras aliquam posuere mollis.',
			answer: 'Java 3, malesuada faucibus ante et, mattis bibendum mauris.'
		}
	];
}(window.App = window.App || {}));

