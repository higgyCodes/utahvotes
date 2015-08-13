'use strict';

/**
 * @ngdoc service
 * @name utahvotesApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the utahvotesApp.
 */
angular.module('utahvotesApp')
  .factory('dataFactory', ['MainCtrl', function (MainCtrl) {
  	$scope.$watch(function($scope){return $scope.teaser})


      }])
    
