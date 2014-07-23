'use strict';

angular.module('iconFinderApp')
  .controller('IconsCtrl', ['$scope', 'IconService', function ($scope, IconService) {
    IconService.query().$promise.then(function(data) {
      $scope.icons = _.groupBy(data, function(item) {
        return item.category;
      });
    });
  }]);
