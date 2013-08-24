(function(App){
	App.CardView = Ember.View.extend({
		templateName: 'card',
		classNames: ['flipper'],
		attributeBindings: ['newQuestion', 'newAnswer'],

		doubleClick: function(){
			$('.editable').hallo({editable: true});
		},
		didInsertElement: function(){
			$('.editable').hallo({
				editable: false,
		        plugins: {
		          'halloformat': {"bold": true, "italic": true, "strikethrough": true, "underline": true},
		          'halloblock': {},
		          'hallojustify': {},
		          'halloimage': {}
		        }
		    });

		    this.$().on('hallodeactivated', function(event){
		    	var temp = this.get('newQuestion');
		    	var temp2 = this.get('newAnswer');
		    	var answer = event.content;
		    	alert(answer);
		    });
		},
		willDestroyElement: function(){
			this.$().off('hallodeactivated');
		}
	});
}(window.App = window.App || {}));