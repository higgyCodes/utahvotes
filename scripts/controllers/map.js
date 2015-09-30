angular.module('utahvotesApp', ['googlechart', 'ngMap'])
  .controller('mapCtrl', function ($scope) {
  	$scope.test = "testrun"

  	$scope.$on('packagedeal', function(event, data) {
	   	var vanimport = d3.tsv.parse(data);

  })

})