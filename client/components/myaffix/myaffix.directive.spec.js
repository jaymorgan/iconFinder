'use strict';

describe('Directive: myaffix', function () {

  // load the directive's module
  beforeEach(module('iconFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<myaffix></myaffix>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myaffix directive');
  }));
});