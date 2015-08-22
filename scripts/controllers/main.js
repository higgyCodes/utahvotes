'use strict';

/**
 * @ngdoc function
 * @name utahvotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utahvotesApp
 */
angular.module('utahvotesApp', ['googlechart'])
  .controller('MainCtrl', function ($scope) {
  	var testrun = []
	var party = {
		Democrats : 0,
		Republicans : 0,
		Other : 0
	};
	var race = {
		Caucasian : 0,
		Hispanic : 0,
		Other : 0
	};
	var age = {
		'18 to 24' : 0,
		'25 to 34' : 0,
		'35 to 49' : 0,
		'50 to 64' : 0,
		'65 + ' : 0
	};
	var ideology = {
		'0 to 9.99' : 0,
		'10 to 19.99' : 0,
		'20 to 29.99' : 0,
		'30 to 39.99' : 0,
		'40 to 49.99' : 0,
		'50 to 59.99' : 0,
		'60 to 69.99' : 0,
		'70 to 79.99' : 0,
		'80 to 89.99' : 0,
		'90 to 100' : 0
	}
	var partisanship = {
		'0 to 9.99' : 0,
		'10 to 19.99' : 0,
		'20 to 29.99' : 0,
		'30 to 39.99' : 0,
		'40 to 49.99' : 0,
		'50 to 59.99' : 0,
		'60 to 69.99' : 0,
		'70 to 79.99' : 0,
		'80 to 89.99' : 0,
		'90 to 100' : 0
	}
	var activist = {
		'0 to 9.99' : 0,
		'10 to 19.99' : 0,
		'20 to 29.99' : 0,
		'30 to 39.99' : 0,
		'40 to 49.99' : 0,
		'50 to 59.99' : 0,
		'60 to 69.99' : 0,
		'70 to 79.99' : 0,
		'80 to 89.99' : 0,
		'90 to 100' : 0
	}
	var timesVoted = {
		'0 of 3' : 0,
		'1 of 3' : 0,
		'2 of 3' : 0,
		'3 of 3' : 0
	}

	




    $scope.$on('packagedeal', function(event, data) {

	    var vanimport = d3.csv.parse(data);
		for (var i = 0; i < vanimport.length; i++) {
			var modifications = vanimport[i]
		    modifications["Activist"] = modifications["2012:Catalist:GenAct"];
		    modifications["Partisanship"] = modifications["2012:PartisanshipScr"];
		    modifications["VoterProp"] = modifications["2013:Cat:VotePropv2"];
		    modifications["Race"] = modifications["RaceName "]
		    delete modifications["2012:Catalist:GenAct"];
		    delete modifications["2012:PartisanshipScr"];
		    delete modifications["2013:Cat:VotePropv2"]

		    };
		    // Changing strings to data
		    vanimport.forEach(function(d){
		    	d.Age = +d.Age
		    	d.Ideology = +d.Ideology
		    	d.Activist = +d.Activist
		    	d.Partisanship = +d.Partisanship
		    	d.VoterProp = +d.VoterProp
			});
		    // creating party data set
		    vanimport.forEach(function(d){
		    	//Party
		    	if (d.Party == "D") {
		    		party.Democrats += 1
		    	} else if (d.Party == "R") {
		    		party.Republicans += 1
		    	} else { party.Other +=1};
		    	//Race
		    	if (d.Race == "Caucasian") {
		    		race.Caucasian += 1
		    	} else if (d.Race == "Hispanic") {
		    		race.Hispanic += 1
		    	} else {race.Other += 1}
			});
		    //creating age data set
		    vanimport.forEach(function(d){
		    	if (d.Age < 25) {
		    		age['18 to 24'] += 1
		    	} else if (d.Age < 35) {
		    		age['25 to 34'] += 1
		    	} else if (d.Age < 50) {
		    		age['35 to 49'] += 1
		    	} else if (d.Age < 65) {
		    		age['50 to 64'] += 1
		    	} else {
		    		age['65 + '] += 1
		    	};
		    });
		    //creating ideology data set
		    vanimport.forEach(function(d){
		    	if (d.Ideology < 10) {
		    		ideology['0 to 9.99'] += 1
		    	} else if (d.Ideology < 20) {
		    		ideology['10 to 19.99'] += 1
		    	} else if (d.Ideology < 30) {
		    		ideology['20 to 29.99'] += 1
		    	} else if (d.Ideology < 40) {
		    		ideology['30 to 39.99'] += 1
		    	} else if (d.Ideology < 50) {
		    		ideology['40 to 49.99'] += 1
		    	} else if (d.Ideology < 60) {
		    		ideology['50 to 59.99'] += 1
		    	} else if (d.Ideology < 70) {
		    		ideology['60 to 69.99'] += 1
		    	} else if (d.Ideology < 80) {
		    		ideology['70 to 79.99'] += 1
		    	} else if (d.Ideology < 90) {
		    		ideology['80 to 89.99'] += 1
		    	} else { ideology['90 to 100'] += 1}
		    });
		    vanimport.forEach(function(d){
		    	if (d.Partisanship < 10) {
		    		partisanship['0 to 9.99'] += 1
		    	} else if (d.Partisanship < 20) {
		    		partisanship['10 to 19.99'] += 1
		    	} else if (d.Partisanship < 30) {
		    		partisanship['20 to 29.99'] += 1
		    	} else if (d.Partisanship < 40) {
		    		partisanship['30 to 39.99'] += 1
		    	} else if (d.Partisanship < 50) {
		    		partisanship['40 to 49.99'] += 1
		    	} else if (d.Partisanship < 60) {
		    		partisanship['50 to 59.99'] += 1
		    	} else if (d.Partisanship < 70) {
		    		partisanship['60 to 69.99'] += 1
		    	} else if (d.Partisanship < 80) {
		    		partisanship['70 to 79.99'] += 1
		    	} else if (d.Partisanship < 90) {
		    		partisanship['80 to 89.99'] += 1
		    	} else { partisanship['90 to 100'] += 1}
		    })
		    console.log(partisanship)

		 //    console.log(vanimport)
			// console.log(party.Democrats)
			// console.log(race)

			//Race Chart
			var racechart = {};
		    racechart.type = "PieChart";
		    racechart.cssStyle = "height:500px; width:500px;";
		    racechart.data = {"cols": [
		        {id: "race", label: "Race", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: "Caucasian"},
		            {v: race.Caucasian},
		            
		        ]},
		        {c: [
		            {v: "Hispanic"},
		            {v: race.Hispanic},
		        ]},
		        {c: [
		            {v: "Other"},
		            {v: race.Other}
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

		    
		    
		    //Party Chart
		    var partychart = {};
		    partychart.type = "PieChart";
		    partychart.cssStyle = "height:500px; width:500px;";
		    partychart.data = {"cols": [
		        {id: "Party", label: "Party", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: "Democrats"},
		            {v: party.Democrats},
		            
		        ]},
		        {c: [
		            {v: "Republicans"},
		            {v: party.Republicans},
		        ]},
		        {c: [
		            {v: "Other"},
		            {v: party.Other}
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
		    agechart.cssStyle = "height:500px; width:500px;";
		    agechart.data = {"cols": [
		        {id: "age", label: "Age", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '18 to 24'},
		            {v: age['18 to 24']},
		            
		        ]},
		        {c: [
		            {v: '25 to 34'},
		            {v: age['25 to 34']},
		        ]},
		        {c: [
		            {v: '35 to 49'},
		            {v: age['35 to 49']}
		        ]},
		        {c: [
		            {v: '50 to 64'},
		            {v: age['50 to 64']}
		        ]},
		        {c: [
		            {v: '65 + '},
		            {v: age['65 + ']}
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
		    //------- IDEOLOGY CHART ------
		    var ideologychart = {};
		    ideologychart.type = "AreaChart";
		    ideologychart.cssStyle = "height:500px; width:1000px;";
		    ideologychart.data = {"cols": [
		        {id: "ideology", label: "Ideology", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 to 9.99'},
		            {v: ideology['0 to 9.99']},
		        ]},
		        {c: [
		            {v: '10 to 19.99'},
		            {v: ideology['10 to 19.99']},
		        ]},
		        {c: [
		            {v: '20 to 29.99'},
		            {v: ideology['20 to 29.99']}
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: ideology['30 to 39.99']}
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: ideology['40 to 49.99']}
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: ideology['50 to 59.99']}
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: ideology['60 to 69.99']}
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: ideology['70 to 79.99']}
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: ideology['80 to 89.99']}
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: ideology['90 to 100']}
		        ]}
		    ]};


		    ideologychart.options = {
		        "title": "Ideology",
		        "isStacked": "true",
		        "fill": 20,
		        "displayExactValues": true,
		        "vAxis": {
		            "title": "Ideology", "gridlines": {"count": 6}
		        },
		        "hAxis": {
		            "title": "Population"
		        }
		    };

		    ideologychart.formatters = {};

		    //------- PARTISANSHIP CHART ------
		    var partisanshipchart = {};
		    partisanshipchart.type = "AreaChart";
		    partisanshipchart.cssStyle = "height:500px; width:1000px;";
		    partisanshipchart.data = {"cols": [
		        {id: "partisanship", label: "Partisanship", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 to 9.99'},
		            {v: partisanship['0 to 9.99']},
		        ]},
		        {c: [
		            {v: '10 to 19.99'},
		            {v: partisanship['10 to 19.99']},
		        ]},
		        {c: [
		            {v: '20 to 29.99'},
		            {v: partisanship['20 to 29.99']}
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: partisanship['30 to 39.99']}
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: partisanship['40 to 49.99']}
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: partisanship['50 to 59.99']}
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: partisanship['60 to 69.99']}
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: partisanship['70 to 79.99']}
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: partisanship['80 to 89.99']}
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: partisanship['90 to 100']}
		        ]}
		    ]};


		    partisanshipchart.options = {
		        "title": "Partisanship",
		        "isStacked": "true",
		        "fill": 20,
		        "displayExactValues": true,
		        "vAxis": {
		            "title": "Partisanship", "gridlines": {"count": 6}
		        },
		        "hAxis": {
		            "title": "Population"
		        }
		    };

		    partisanshipchart.formatters = {};


		   //Scoping to the View
		   $scope.partychart = partychart;
		   $scope.racechart = racechart;
		   $scope.agechart = agechart;
		   $scope.ideologychart = ideologychart;
		   $scope.partisanshipchart = partisanshipchart;







			});
	});