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
  	
    $scope.$on('packagedeal', function(event, data) { console.log("BROADCAST", data); });
  	$scope.remedy = "NameName"

}]);