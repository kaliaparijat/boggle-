var app = app || {};

(function ($) {
	'use strict';
  app.Cube = Backbone.Model.extend({

    initialize: function(attributes) {
			var randChar, coordinates;
      this.letters = attributes['letters'];
		  coordinates = attributes['coordinates'];
      this.set('x', coordinates[0]);
      this.set('y', coordinates[1]);
      var randomChar, chars = this.letters.split("");
      // randomly assign alphabets to the sides of the array
      for (var i = 1 ; i <= 6; i++) {
         randChar = chars[this.randomize(chars.length, 0)];
         this.set(i, randChar);
      }
      this.shuffle();
    },

    getFrontFace: function() {
        return this.get(this.get('front'));
    },

    // randomly assign a front face to one side
    shuffle: function() {
        this.set('front', this.randomize(6, 1));
    },

		randomize: function(max, min) {
			if(min === 'undefined') {
				min = 0;
			}
			return Math.floor(Math.random() * max) + min;
		}

  });
})(jQuery);
