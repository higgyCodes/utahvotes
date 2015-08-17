'use strict';

/**
 * @ngdoc directive
 * @name utahvotesApp.directive:testPieChart
 * @description
 * # testPieChart
 */
angular.module('utahvotesApp')
  .directive('testPieChart', ['utahvotesApp', function (utahvotesApp) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testPieChart directive');
      }
    };
  }]);
