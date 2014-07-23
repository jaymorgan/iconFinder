'use strict';

describe('Directive: avatar', function () {

  // load the directive's module and view
  beforeEach(module('iconFinderApp'));
  beforeEach(module('components/avatar/avatar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<avatar></avatar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the avatar directive');
  }));
});