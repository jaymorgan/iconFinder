'use strict';

describe('Directive: categoryNav', function () {

  // load the directive's module and view
  beforeEach(module('iconFinderApp'));
  beforeEach(module('components/categorynav/categorynav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<category-nav></category-nav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the categorynav directive');
  }));
});