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


  	dataService.testrun()

    $scope.$on('packagedeal', function(event, data) {
	   	var vanimport = d3.tsv.parse(data);

		dataService.nameModifications(vanimport)

		dataService.stringToData(vanimport)

		resultTally.demoTally(vanimport)

		

		
		    


		 //    //======== TIMES VOTED CHART ============

		 //    

// Heatmap data: 500 Points
		//Chart Object for Geochart

	var chart1 = {};
  chart1.type = "GeoChart";
  chart1.data = [
        ['Locale', 'Count', 'Percent'],
        ['Germany', 22, 23],
        ['United States', 34, 11],
        ['Brazil', 42, 11],
        ['Canada', 57, 32],
        ['France', 6, 9],
        ['RU', 72, 3]
      ];

  chart1.options = {
      width: 600,
      height: 300,
      chartArea: {left:10,top:10,bottom:0,height:"100%"},
      colorAxis: {colors: ['#aec7e8', '#1f77b4']},
      displayMode: 'Utah'
  };

  chart1.formatters = {
     number : [{
       columnNum: 1,
       pattern: "$ #,##0.00"
     }]
   };

  $scope.chart = chart1;




			$scope.$on('mapInitialized', function(evt, evtMap) {
    map = evtMap;
    marker = map.markers[0];
  });
 





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







			});

	})