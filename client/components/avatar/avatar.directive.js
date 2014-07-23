'use strict';

angular.module('iconFinderApp')
  .directive('avatar', function () {
    return {
      templateUrl: 'components/avatar/avatar.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });