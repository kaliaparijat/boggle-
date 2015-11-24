app = app || {};
(function ($) {
  'use strict';
  app.Board = Backbone.Collection.extend({

    dices: [
        "aaafrs", "aaeeee", "aafirs", "adennn", "aeeeem",
        "aeegmu", "aegmnn", "afirsy", "bjkqxz", "ccenst",
        "ceiilt", "ceilpt", "ceipst", "ddhnot", "dhhlor",
        "dhlnor", "dhlnor", "eiiitt", "emottt", "ensssu",
        "fiprsy", "gorrvw", "iprrry", "nootuw", "ooottu"
    ],

    initialize: function() {
      var i, j, k = 0;
      this.models = [];
        for(i = 0; i < 5; i++) {
          this.models[i] = [];// initialize models as a 2D array to get x-y coordinates
          for(j = 0; j < 5; j++) {
            this.models[i].push(new app.Cube({letters: this.dices[k++], coordinates: [i, j] }));
          }
        }
        this.models = _.flatten(this.models); // converting it back to a 1-D array
      }
  });
})(jQuery);
