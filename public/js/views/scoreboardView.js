app = app || {};

(function ($) {
	'use strict';
  app.ScoreBoardView = Backbone.View.extend({
    el: '#scoreboard thead',
    total: 0,

    template: function(params) {
      var tmpl =  Handlebars.compile($('#score-board-row').html());
      return tmpl(params);
    },

    initialize: function(attributes) {
      _.bindAll(this, "render");
      this.updateBoard(attributes);
    },

    updateBoard: function(attributes) {
      this.setAttributes(attributes);
      this.render();
    },

    setAttributes: function(attributes) {
      this.total += attributes.score;
      this.word = attributes.word;
      this.score = attributes.score;
    },

    render: function() {
      $(this.el).after(this.template({word: this.word, score: this.score}));
			$('#totalScore').text(this.total);
    }
  });
})(jQuery);
