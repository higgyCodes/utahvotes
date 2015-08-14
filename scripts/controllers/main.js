'use strict';

/**
 * @ngdoc function
 * @name utahvotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utahvotesApp
 */
angular.module('utahvotesApp', [])
  .controller('MainCtrl', function ($scope) {
  	var testrun = []

    $scope.$on('packagedeal', function(event, data) {

    var vanimport = d3.csv.parse(data);
	for (var i = 0; i < vanimport.length; i++) {
		var modifications = vanimport[i]
	    modifications["Activist"] = modifications["2012:Catalist:GenAct"];
	    modifications["Partisanship"] = modifications["2012:PartisanshipScr"];
	    modifications["VoterProp"] = modifications["2013:Cat:VotePropv2"];
	    delete modifications["2012:Catalist:GenAct"];
	    delete modifications["2012:PartisanshipScr"];
	    delete modifications["2013:Cat:VotePropv2"]

	    console.log(modifications.Activist)
	    console.log(modifications)
	    vanimport.forEach(function(d){
	    	d.Age = +d.Age
	    	d.Ideology = +d.Ideology
	    	d.Activist = +d.Activist
	    	d.Partisanship = +d.Partisanship
	    	d.VoterProp = +d.VoterProp
		});
	}
	console.log(modifications)

    });
    $scope.teaser = $scope.testrun





});