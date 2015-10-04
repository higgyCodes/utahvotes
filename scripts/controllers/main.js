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

		var racechart = {};
		racechart.type = "PieChart";
		racechart.data = {
			"cols": [
		    	{id: "race", label: "Race", type: "string"},
		    	{id: "population", label: "Population", type: "number"}
			], 
			"rows": [
		        {c: [
		            {v: "Caucasian"},
		            {v: resultTally.race.Caucasian},
		            
		        ]},
		        {c: [
		            {v: "Hispanic"},
		            {v: resultTally.race.Hispanic},
		        ]},
		        {c: [
		            {v: "Other"},
		            {v: resultTally.race.Other}
		        ]}
		    ]};

		racechart.options = {
		    "title": "Race",
		    "isStacked": "true",
		    "fill": 20,
		    "displayExactValues": true,
		    "vAxis": {
		        "title": "Race", "gridlines": {"count": 6}
		    },
		    "hAxis": {
		            "title": "Population"
		        }
		    };

		    racechart.formatters = {};


		    // Sex Chart
		    var sexchart = {};
		sexchart.type = "PieChart";
		sexchart.data = {
			"cols": [
		    	{id: "sex", label: "Sex", type: "string"},
		    	{id: "population", label: "Population", type: "number"}
			], 
			"rows": [
		        {c: [
		            {v: "Male"},
		            {v: resultTally.sex.Male},
		            
		        ]},
		        {c: [
		            {v: "Female"},
		            {v: resultTally.sex.Female},
		        ]},
		        {c: [
		            {v: "Unknown"},
		            {v: resultTally.sex.Unknown}
		        ]}
		    ]};

		sexchart.options = {
		    "title": "Sex",
		    "isStacked": "true",
		    "fill": 20,
		    "displayExactValues": true,
		    "vAxis": {
		        "title": "Sex", "gridlines": {"count": 6}
		    },
		    "hAxis": {
		            "title": "Population"
		        }
		    };

		    sexchart.formatters = {};

		    
		    
		    //Party Chart
		    var partychart = {};
		    partychart.type = "PieChart";
		    partychart.data = {"cols": [
		        {id: "Party", label: "Party", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: "Democrats"},
		            {v: resultTally.party.Democrats},
		            
		        ]},
		        {c: [
		            {v: "Republicans"},
		            {v: resultTally.party.Republicans},
		        ]},
		        {c: [
		            {v: "Other"},
		            {v: resultTally.party.Other}
		        ]}
		    ]};

		    partychart.options = {
		        "title": "Party",
		        "isStacked": "true",
		        "fill": 20,
		        "displayExactValues": true,
		        "vAxis": {
		            "title": "Party", "gridlines": {"count": 6}
		        },
		        "hAxis": {
		            "title": "Population"
		        }
		    };

		    partychart.formatters = {};

		    var agechart = {};
		    agechart.type = "BarChart";
		    agechart.cssStyle = "height:500px; width:1000px;";
		    agechart.data = {"cols": [
		        {id: "age", label: "Age", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '18 to 24'},
		            {v: resultTally.age['18 to 24']},
		            
		        ]},
		        {c: [
		            {v: '25 to 34'},
		            {v: resultTally.age['25 to 34']},
		        ]},
		        {c: [
		            {v: '35 to 49'},
		            {v: resultTally.age['35 to 49']}
		        ]},
		        {c: [
		            {v: '50 to 64'},
		            {v: resultTally.age['50 to 64']}
		        ]},
		        {c: [
		            {v: '65 + '},
		            {v: resultTally.age['65 + ']}
		        ]}
		    ]};

		    agechart.options = {
		        "title": "Age",
		        "isStacked": "true",
		        "fill": 20,
		        "displayExactValues": true,
		        "vAxis": {
		            "title": "Age", "gridlines": {"count": 6}
		        },
		        "hAxis": {
		            "title": "Population"
		        }
		    };

		    agechart.formatters = {};


		 //    //======== TIMES VOTED CHART ============

		 //    var timesVotedChart = {};
		 //    timesVotedChart.type = "BarChart";
		 //    timesVotedChart.data = {"cols": [
		 //        {id: "Times Voted", label: "Voter Propensity", type: "string"},
		 //        {id: "population", label: "Population", type: "number"}
		 //    ], "rows": [
		 //        {c: [
		 //            {v: '0 of 3'},
		 //            {v: timesVoted['0 of 3']}
		 //        ]},
		 //        {c: [
		 //            {v: '1 of 3'},
		 //            {v: timesVoted['1 of 3']}
		 //        ]},
		 //        {c: [
		 //            {v: '2 of 3'},
		 //            {v: timesVoted['2 of 3']}
		 //        ]},
		 //        {c: [
		 //            {v: '3 of 3'},
		 //            {v: timesVoted['3 of 3']}
		 //        ]}
		 //    ]};


		 //    timesVotedChart.options = {
		 //        "title": "Times Voted",
		 //        "isStacked": "true",
		 //        "fill": 20,
		 //        "displayExactValues": true,
		 //        "vAxis": {
		 //            "title": "Voter Propensity", "gridlines": {"count": 6}
		 //        },
		 //        "hAxis": {
		 //            "title": "Population"
		 //        }
		 //    };

		 //    timesVotedChart.formatters = {};

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
		   // $scope.sexchart = sexchart;
		   // $scope.racechart = racechart;
		   // $scope.agechart = agechart;
		   var ideologychart = {};
		   $scope.ideologychart = chartService.chartMaker(ideologychart, "Ideology", resultTally.ideology);
		   var partisanshipchart = {};
		   $scope.partisanshipchart = chartService.chartMaker(partisanshipchart, "Partisanship", resultTally.partisanship);
		   var activistchart = {};
		   $scope.activistchart = chartService.chartMaker(activistchart, "Activist", resultTally.activist);
		   var voterpropchart = {};
		   $scope.voterpropchart = chartService.chartMaker(voterpropchart, "Voter Propensity", resultTally.voterprop);
		   // $scope.timesVotedChart = timesVotedChart







			});

	})