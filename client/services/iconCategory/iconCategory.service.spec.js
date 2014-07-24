'use strict';

describe('Service: IconCategory', function () {

  // load the service's module
  beforeEach(module('iconFinderApp'));

  // instantiate service
  var IconCategory;
  beforeEach(inject(function (_IconCategory_) {
    IconCategory = _IconCategory_;
  }));

  it('should do something', function () {
    expect(!!IconCategory).toBe(true);
  });

});