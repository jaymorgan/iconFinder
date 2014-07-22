'use strict';

describe('Service: IconService', function () {

  // load the service's module
  beforeEach(module('iconFinderApp'));

  // instantiate service
  var IconService;
  beforeEach(inject(function (_IconService_) {
    IconService = _IconService_;
  }));

  it('should get a list of Icons from the database', function () {
    expect(!!IconService).toBe(true);
  });

  it('should save updates to an Icon', function () {
    expect(!!IconService).toBe(true);
  });

});