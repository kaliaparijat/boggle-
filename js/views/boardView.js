app = app || {};

(function ($) {
	'use strict';
  app.BoggleBoardView = Backbone.View.extend({

  el: '#boggleboard',

  word: [], // char array for current word

  list:[],  // all words go into this list

  current: {}, // internal storage for currentcell (or last selected?)

  scoreMap: {
     1: 0,
     2: 0,
     3: 1,
     4: 1,
     5: 2,
     6: 3,
     7: 5
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    // render the boggleBoard with the cubes
     var j = -1 ;
     this.collection.each(function(model, i) {
         if( i % 5 === 0) { // gridrow is a semantic concept to group 5 cells in the html
           $('#boggleboard .gridrows').append("<div class='gridrow'></div>");
           j++;
         }
         new app.CubeView({el: '#boggleboard .gridrows .gridrow:eq(' + j + ')', model: model}) ;
     });
  },

  events: {
    'click .gridrows .cell': 'select',
    'click #submit': 'addWord'
  },

  addWord: function() {
    this.list.push(this.liveWord());
    this.reset();
  },

  reset: function() {
    this.updateBoard();
    this.word = [];
    this.current = {};
    $('.currentWord .liveWord').text("");
    $('#boggleboard .gridrows .cell').removeClass('highlight');
  },

  updateBoard: function() {
    var score, wordLength = this.word.length, tmpl, params, scoreboardView;
    if(wordLength >= 8) {
      score = 11;
    }
    else if (wordLength > 0){
      score = this.scoreMap[wordLength];
		}
		if(this.scoreBoardView === undefined) {
			this.scoreBoardView = new app.ScoreBoardView({word: this.liveWord(), score: score});
		}
		else {
			this.scoreBoardView.updateBoard({word: this.liveWord(), score: score});
		}
  },

  select: function(event){
    var cell = event.currentTarget,
		x = Number($(cell).data("x")),
		y = Number($(cell).data("y")),
		addHighlightClass = true;

    if(this.isLastSelected(x, y)) { // this implies the select event is to un-select a selected cell
			return this.removeCurrent().toggleHighlightClass(cell, !addHighlightClass).displayLiveWord();
    }
    else if(_.isEmpty(this.current) || this.isNeighbor(x, y) && !$(cell).hasClass('highlight')) {
		  return	this.setCurrent(cell, x, y).toggleHighlightClass(cell, addHighlightClass).displayLiveWord();
    }
  },

  displayLiveWord: function() {
    $('.currentWord .liveWord').text(this.liveWord().toString());
    return this;
  },

	liveWord: function() {
    var word = "";
    _.each(this.word, function(current) {
      word = word.concat(current['char']);
    });
    return word;
  },

  isLastSelected: function(x, y) {
   return this.current['x'] === x && this.current['y'] === y;
  },

  toggleHighlightClass: function(cell, add) {
		if(add === true) {
      $(cell).addClass('highlight');
    }
		else if(add === false) {
      $(cell).removeClass('highlight');
    }
 		return this;
  },

  isNeighbor: function(new_x, new_y) {
    var curr_x = this.current['x'], curr_y = this.current['y'], diff_x, diff_y;

    diff_x = (curr_x >= new_x) ? curr_x - new_x : new_x - curr_x;
    diff_y = (curr_y >= new_y) ? curr_y - new_y : new_y - curr_y;

		// difference between two neighbor cell co-ordinates will never be greater than 1
		return !(diff_x > 1 || diff_y > 1);
  },

  removeCurrent: function() {
    this.word.pop();
    if(this.word.length > 0) {
			// copy by value & not reference
      this.current = _.clone(this.word[this.word.length - 1]);
    }
    else {
      this.current = {};
    }
    return this;
  },

  setCurrent: function(cell, x, y) {
    this.current['x'] = x;
    this.current['y'] = y;
    this.current['char'] = $(cell).data('char');
    this.word.push(_.clone(this.current)); // copy by value & not reference
    return this;
  }
});
})(jQuery);
