/*
 *
 *
 *
 * Copyright (c) 2015 Greg Lavallee
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.repaint = function () {
    return this.each(function () {
      // Do something to each selected element.
      $(this).show(':visible').hide();
    });
  };
}(jQuery));
