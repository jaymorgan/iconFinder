'use strict';

angular.module('iconFinderApp')
  .provider('IconService', function IconService() {
    this.$get = ['$resource', function ($resource) {
      var Icon = $resource('/api/icons/:id', {}, {
        update: {
          method: 'PUT'
        }
      });
      return Icon;
    }];
  });
