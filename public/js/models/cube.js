var app = app || {};

(function ($) {
	'use strict';
  app.Cube = Backbone.Model.extend({

    initialize: function(attributes) {
      this.letters = attributes['letters'];
      this.x = attributes['x']; //co-ordinates in the grid
      this.y = attributes['y'];
      var randomChar, chars = this.letters.split("");
      // randomly assign alphabets to the sides of the array
      for (var i = 1 ; i <= 6; i++) {
         randChar = chars[Math.floor(Math.random() * chars.length)];
         this.set(i, randChar);
      }
      this.shuffle();
    },

    getFrontFace: function() {
        return this.get(this.get('front'));
    },

    // randomly assign a front face to one side
    shuffle: function() {
        this.set('front', Math.floor(Math.random() * 6) + 1);
    }
  });
})(jQuery);
