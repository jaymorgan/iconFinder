'use strict';

angular.module('iconFinderApp')
  .directive('avatar', function () {
    return {
      templateUrl: 'components/avatar/avatar.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.status = {
          isopen: false
        };

        scope.toggled = function(open) {
          console.log('Dropdown is now: ', open);
        };

        scope.toggleDropdown = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          scope.status.isopen = !scope.status.isopen;
        };
      }
    };
  });