'use strict';

angular.module('iconFinderApp')
  .directive('categoryNav', function () {
    return {
      templateUrl: 'components/categorynav/categorynav.html',
      restrict: 'E',
      replace: true,
      link: function (scope, element, attrs) {
      }
    };
  });