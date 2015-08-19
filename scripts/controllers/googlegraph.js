'use strict';

/**
 * @ngdoc function
 * @name utahvotesApp.controller:GooglegraphCtrl
 * @description
 * # GooglegraphCtrl
 * Controller of the utahvotesApp
 */

angular.module('utahvotesApp')
  .controller('GooglegraphCtrl', ['$scope', 'googlechart', function($scope, googlechart) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
