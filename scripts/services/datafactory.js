'use strict';

/**
 * @ngdoc service
 * @name utahvotesApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the utahvotesApp.
 */
angular.module('utahvotesApp')
  .factory('dataFactory', function (papaparse) {
    // Service logic
    // ...
    file = "localfileplaceholder"
    var parseddata = function(file) {
      localdata = Papa.parse(file, config)
      console.log(localdata)
    }

    // Public API here
    return {
      someMethod: function () {
        return parseddata;
      }
    };
  });
