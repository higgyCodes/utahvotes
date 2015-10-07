'use strict';

/**
 * @ngdoc function
 * @name utahvotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utahvotesApp
 */
angular.module('utahvotesApp', ['googlechart', 'ngMap'])
  .controller('MainCtrl', function ($scope, dataService, resultTally, chartService) {

    $scope.$on('packagedeal', function(event, data) {
	   	var vanimport = d3.tsv.parse(data);

		dataService.nameModifications(vanimport)

		dataService.stringToData(vanimport)
		
		resultTally.demoTally(vanimport)
		   //Scoping to the View
		  var partychart = {};
		  $scope.partychart = chartService.pieChart(partychart, "Party", "Democrats", resultTally.party.Democrats, "Republicans", resultTally.party.Republicans, "Other", resultTally.party.Other)
		  var sexchart = {};
		  $scope.sexchart = chartService.pieChart(sexchart, "Sex", "Male", resultTally.sex.Male, "Female", resultTally.sex.Female, "Unknown", resultTally.sex.Unknown)
		  var racechart = {};
		  $scope.racechart = chartService.pieChart(racechart, "Race", "Caucasian", resultTally.race.Caucasian, "Hispanic", resultTally.race.Hispanic, "Other", resultTally.race.Other)
		  
		  $scope.agechart = chartService.ageChart()
		   var ideologychart = {};
		   $scope.ideologychart = chartService.chartMaker(ideologychart, "Ideology", resultTally.ideology);
		   var partisanshipchart = {};
		   $scope.partisanshipchart = chartService.chartMaker(partisanshipchart, "Partisanship", resultTally.partisanship);
		   var activistchart = {};
		   $scope.activistchart = chartService.chartMaker(activistchart, "Activist", resultTally.activist);
		   var voterpropchart = {};
		   $scope.voterpropchart = chartService.chartMaker(voterpropchart, "Voter Propensity", resultTally.voterprop);
		   $scope.timesVotedChart = chartService.timesVoted()
		   $scope.countyChart = chartService.dynamicChartMaker("County", resultTally.countyentry);

	})
})