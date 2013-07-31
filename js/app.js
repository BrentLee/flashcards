(function(){

	window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

	$(document).ready(function() {
  $('.editable').hallo({
    plugins: {
      'halloformat': {"bold": true, "italic": true, "strikethrough": true, "underline": true},
      'halloheadings': [1,2,3],
      'halloblock': {},
      'hallojustify': {},
      'hallolists': {"ordered": true, "unordered": true},
      'halloreundo': {},
      'halloimage': {}
    }
  });
});

}());
