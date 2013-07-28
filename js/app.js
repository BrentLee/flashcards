(function(){

	window.App = Ember.Application.create();

	$(document).ready(function() {
  $('.editable').hallo({
    plugins: {
      'halloformat': {},
      'halloblock': {},
      'hallojustify': {},
      'hallolists': {},
      'halloreundo': {}
    }
  });
});

}());
