'use strict';

angular.module('iconFinderApp')
  .directive('categoryNav', function () {
    return {
      templateUrl: 'components/categorynav/categorynav.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });