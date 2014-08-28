'use strict';

describe('Controller: IconsCtrl', function () {

  // load the controller's module
  beforeEach(module('iconFinderApp'));
  beforeEach(module('iconServiceMock'));

  var IconsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Icon_) {
    scope = $rootScope.$new();
    IconsCtrl = $controller('IconsCtrl', {
      $scope: scope
    });
  }));

  it('should load all of the icons from the service', function () {
    expect(1).toEqual(1);
  });
  it('should ...', function () {
    expect(1).toEqual(1);
  });
  it('should ...', function () {
    expect(1).toEqual(1);
  });
  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
