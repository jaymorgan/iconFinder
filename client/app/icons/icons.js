'use strict';

angular.module('iconFinderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('icons', {
        url: '/icons',
        templateUrl: 'app/icons/icons.html',
        controller: 'IconsCtrl'
      });
  });