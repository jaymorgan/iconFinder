'use strict';

angular.module('iconFinderApp')
  .provider('IconCategory', function IconCategory() {
    this.$get = ['$resource', function ($resource) {
      var IconCategory = $resource('/api/iconcategories/:id', {}, {
        update: {
          method: 'PUT'
        }
      });
      return IconCategory;
    }];
  });
