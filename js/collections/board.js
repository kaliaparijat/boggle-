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
      this.models = []; // models will initially be a 5X5 multi array
        for(i = 0; i < 5; i++) {
          this.models[i] = [];
          for(j = 0; j < 5; j++) {
            this.models[i].push(new app.Cube({letters: this.dices[k++], x: i, y: j})); // so that co-ordinates are easy
          }
        }
        this.models = _.flatten(this.models); // convert it back to a single array
      }
  });
})(jQuery);
