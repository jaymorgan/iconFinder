'use strict';

angular.module('iconFinderApp')
  .controller('IconsCtrl', ['$scope', 'IconService', function ($scope, IconService) {
    $scope.icons = IconService.query();
  }]);
