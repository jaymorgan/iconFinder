'use strict';

angular.module('iconServiceMock', [])
  .provider('Icon', function($q) {
    this.icons = [
      {
        name: 'icon1',
        class: 'fa-class'
      },
      {
        name: 'icon2',
        class: 'fa-class'
      },
      {
        name: 'icon3',
        class: 'fa-class'
      }
    ];
    this.$get = function() {
      return {
        query: function() {
          var deferred = $q.defer();
          deferred.resolve(this.icons);
          return deferred.promise;
        }
      };
    };
  });
