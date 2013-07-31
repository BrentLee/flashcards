(function(App){
	App.Card = DS.Model.extend({
		question: DS.attr('string'),
		answer: DS.attr('string'),
		deck: DS.belongsTo('App.Deck'),
		correct: DS.attr('boolean')
	});

	App.Card.FIXTURES = [
		{
			id: 100,
			question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tristique metus ut pretium. ',
			answer: 'Aenean tempor mi at fermentum sodales. Nam auctor lectus odio, vitae cursus dui suscipit vel.'
		},
		{
			id: 101,
			question: 'Donec interdum eu lacus id mollis.',
			answer: ' Sed tincidunt elementum tellus. Nullam ac tincidunt nulla. Vivamus non dictum leo.'
		},
		{
			id: 102,
			question: 'Curabitur condimentum tincidunt posuere. Vestibulum placerat iaculis posuere.',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			id: 200,
			question: 'Pellentesque pellentesque mauris at dui tincidunt, in gravida ante posuere. Donec auctor lacus a volutpat congue.',
			answer: 'Sed porttitor purus vel sapien porta, nec porta tortor rhoncus. Curabitur accumsan lorem elementum elit volutpat suscipit.'
		},
		{
			id: 201,
			question: 'Fusce suscipit ut eros et placerat. Vestibulum dapibus et urna sed fringilla.',
			answer: 'Aenean tempor massa sit amet lacus egestas, in porttitor leo tincidunt.'
		},
		{
			id: 202,
			question: 'Nulla sit amet aliquet tortor. Morbi id facilisis urna.',
			answer: 'Curabitur venenatis malesuada viverra. Nulla placerat est dolor, nec consequat velit interdum eget.'
		},
		{
			id: 203,
			question: 'Ut porta libero non metus rhoncus, eget tempus felis iaculis. Mauris scelerisque gravida vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus',
			answer: 'Suspendisse mollis in mauris ut pretium. Vivamus auctor, felis eu condimentum fermentum, nulla lorem interdum tortor, id convallis risus tellus lacinia magna.'
		},
		{
			id: 300,
			question: 'Nulla adipiscing porta pulvinar. Morbi at pharetra arcu. Aliquam lacinia lectus mauris, vitae euismod augue lobortis vitae.',
			answer: 'Maecenas nec mattis lectus.'
		},
		{
			id: 301,
			question: 'Sed cursus sem cursus dignissim aliquet. Donec in dictum lorem.',
			answer: 'Vestibulum eleifend mi sit amet volutpat tempor.'
		},
		{
			id: 302,
			question: 'Vestibulum ornare tortor non mi pellentesque dictum. Cras aliquam posuere mollis.',
			answer: 'usce est ante, malesuada faucibus ante et, mattis bibendum mauris.'
		}
	];
}(window.App = window.App || {}));

