'use strict';

angular.module('iconFinderApp')
  .directive('myaffix', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.affix({
          offset: {
            top: 50
          }
        });
      }
    };
  });