/*
 * newsfader
 * https://github.com/nolawi/newsfader
 *
 * Copyright (c) 2017 Nolawi Petros
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.newsfader = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.newsfader = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.newsfader.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.newsfader.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].newsfader = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
