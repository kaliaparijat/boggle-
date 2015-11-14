app = app || {};
(function ($) {
	'use strict';
  new app.BoggleBoardView({collection: new app.Board()});
})(jQuery);
