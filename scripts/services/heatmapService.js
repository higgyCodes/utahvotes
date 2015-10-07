angular.module('utahvotesApp')
  .factory('heatmapService', function ($scope) {
  var service = {};

  var heatmap;
  $scope.$on('mapInitialized', function(event, map) {
    heatmap = map.heatmapLayers.foo;
  });



return service
});