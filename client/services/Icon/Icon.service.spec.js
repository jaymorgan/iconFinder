'use strict';

describe('Service: Icon', function () {

  // load the service's module
  beforeEach(module('iconFinderApp'));

  // instantiate service
  var Icon;
  beforeEach(inject(function (_Icon_) {
    Icon = _Icon_;
  }));

  it('should do something', function () {
    expect(!!Icon).toBe(true);
  });

});