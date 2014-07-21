
'use strict';

angular.module('iconFinderApp')
  .provider('Icon', function Icon() {
    this.$get = ['$resource', function($resource) {
      var Icon = $resource('/api/icons/:id', {}, {
        update: {
          method: 'PUT'
        }
      });
      return Icon;
    }];
  });
