'use strict';

/**
 * @ngdoc function
 * @name utahvotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utahvotesApp
 */
angular.module('utahvotesApp', [])
  .controller('MainCtrl', ['$scope', function ($scope) {
  	var testrun = []
    $scope.$on('packagedeal', function(event, data) { console.log("BROADCAST", data);
    $scope.testrun = data });
    $scope.teaser = $scope.testrun




}]);