var app = app || {};

(function ($) {
	'use strict';
   app.CubeView = Backbone.View.extend({
    template:  '#cell-template',

    initialize: function() {
      this.render();
    },

    render: function() {
        var tmpl = Handlebars.compile($(this.template).html());
        var params = {frontface: this.model.getFrontFace().toUpperCase(), x: this.model.get('x'), y: this.model.get('y')};
        $(this.el).append(tmpl(params));
    }
  });
})(jQuery);
