'use strict';

/**
 * @ngdoc directive
 * @name utahvotesApp.directive:dataInput
 * @description
 * # dataInput
 */
angular.module('utahvotesApp')
 .directive('fileReader', function() {
  return {
    scope: {
      fileReader:"="
    },
    link: function(scope, element) {
      $(element).on('change', function(changeEvent) {
        var files = changeEvent.target.files;
        if (files.length) {
          var r = new FileReader();
          r.onload = function(e) {
              var contents = e.target.result;
              //console.log('CONTENTS', contents);
              scope.$emit('packagedeal', contents);
              scope.$apply(function () {
                scope.fileReader = contents;
              });
          };
          
          r.readAsText(files[0]);

        }
      });
    }
  };
});
