(function(){

	window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

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
