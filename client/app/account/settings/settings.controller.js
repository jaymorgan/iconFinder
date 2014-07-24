'use strict';

angular.module('iconFinderApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.changeAvatar = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changeAvatar( $scope.user.avatar)
          .then( function() {
            $scope.message = 'Avatar successfully changed.';
          });
      };
    };

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      };
		};
  });
