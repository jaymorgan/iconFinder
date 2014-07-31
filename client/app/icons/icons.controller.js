'use strict';

angular.module('iconFinderApp')
  .controller('IconsCtrl', ['$scope', '$location', '$anchorScroll',  'Icon', 'IconCategory', function ($scope, $location, $anchorScroll, Icon, IconCategory) {

    var iconsData = [];

    var groupIcons = function(icons) {
    	return _.groupBy(icons, function(item) {
        return item.category;
      });
    };

    IconCategory.query().$promise.then(function(data) {
    	$scope.iconCategories = data;
    });

    Icon.query().$promise.then(function(data) {
      iconsData = data;
      $scope.icons = groupIcons(data);
    });

    $scope.tagClick = function(tag) {
      var filteredData = _.filter(iconsData, function(item) {
        console.log(item);
        console.log(item.tags);
        return _.contains(item.tags, tag);
      });
      $scope.icons = groupIcons(filteredData);
    };

    $scope.scroll = function(anchor) {
    	$location.hash(anchor);
      $anchorScroll();
    };

    $scope.tagsProperties = {
      initTags: ['Poop', 'farts'],
      placeholder: 'type tag name'
    };

  }]);
