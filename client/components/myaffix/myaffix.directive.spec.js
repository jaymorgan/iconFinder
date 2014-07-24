'use strict';

describe('Directive: myaffix', function () {

  // load the directive's module
  beforeEach(module('iconFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should be 1', inject(function ($compile) {
    expect(1).toBe(1);
  }));
});