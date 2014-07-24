'use strict';

describe('Directive: avatar', function () {

  // load the directive's module and view
  beforeEach(module('iconFinderApp'));
  beforeEach(module('components/avatar/avatar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make 1', inject(function ($compile) {
    expect(1).toBe(1);
  }));
});