angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope) {
    $scope.pusdId = $rootScope.pushId;
})