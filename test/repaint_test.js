(function ($) {
  module('jQuery#repaint', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.repaint(), this.elems, 'should be chainable');
  });

  // TODO: write tests

}(jQuery));
