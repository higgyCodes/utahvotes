'use strict';

/**
 * @ngdoc function
 * @name utahvotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utahvotesApp
 */
angular.module('utahvotesApp', ['googlechart', 'ngMap'])
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
	var voterprop = {
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
			console.log(vanimport)
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

		    vanimport.forEach(function(d){
		    	if (d.Activist < 10) {
		    		activist['0 to 9.99'] += 1
		    	} else if (d.Activist < 20) {
		    		activist['10 to 19.99'] += 1
		    	} else if (d.Activist < 30) {
		    		activist['20 to 29.99'] += 1
		    	} else if (d.Activist < 40) {
		    		activist['30 to 39.99'] += 1
		    	} else if (d.Activist < 50) {
		    		activist['40 to 49.99'] += 1
		    	} else if (d.Activist < 60) {
		    		activist['50 to 59.99'] += 1
		    	} else if (d.Activist < 70) {
		    		activist['60 to 69.99'] += 1
		    	} else if (d.Activist < 80) {
		    		activist['70 to 79.99'] += 1
		    	} else if (d.Activist < 90) {
		    		activist['80 to 89.99'] += 1
		    	} else { activist['90 to 100'] += 1}
		    });
		    
		    vanimport.forEach(function(d){
		    	if (d.VoterProp < 10) {
		    		voterprop['0 to 9.99'] += 1
		    	} else if (d.VoterProp < 20) {
		    		voterprop['10 to 19.99'] += 1
		    	} else if (d.VoterProp < 30) {
		    		voterprop['20 to 29.99'] += 1
		    	} else if (d.VoterProp < 40) {
		    		voterprop['30 to 39.99'] += 1
		    	} else if (d.VoterProp < 50) {
		    		voterprop['40 to 49.99'] += 1
		    	} else if (d.VoterProp < 60) {
		    		voterprop['50 to 59.99'] += 1
		    	} else if (d.VoterProp < 70) {
		    		voterprop['60 to 69.99'] += 1
		    	} else if (d.VoterProp < 80) {
		    		voterprop['70 to 79.99'] += 1
		    	} else if (d.VoterProp < 90) {
		    		voterprop['80 to 89.99'] += 1
		    	} else { voterprop['90 to 100'] += 1}
		    });

			// ====== GEOCODES ===========
			var geotest = []
			vanimport.forEach(function(d){

			var datamap	= function(lat, lon) {
			var pusher = new google.maps.LatLng(lat, lon)
			geotest.push(pusher)
			}
			datamap(d.Latitude, d.Longitude)
			console.log(geotest)
			});



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

		    //------- ACTIVIST CHART ------
		    var activistchart = {};
		    activistchart.type = "AreaChart";
		    activistchart.cssStyle = "height:500px; width:1000px;";
		    activistchart.data = {"cols": [
		        {id: "activist", label: "Activist", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 to 9.99'},
		            {v: activist['0 to 9.99']},
		        ]},
		        {c: [
		            {v: '10 to 19.99'},
		            {v: activist['10 to 19.99']},
		        ]},
		        {c: [
		            {v: '20 to 29.99'},
		            {v: activist['20 to 29.99']}
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: activist['30 to 39.99']}
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: activist['40 to 49.99']}
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: activist['50 to 59.99']}
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: activist['60 to 69.99']}
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: activist['70 to 79.99']}
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: activist['80 to 89.99']}
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: activist['90 to 100']}
		        ]}
		    ]};

		    activistchart.options = {
		        "title": "Activist",
		        "isStacked": "true",
		        "fill": 20,
		        "displayExactValues": true,
		        "vAxis": {
		            "title": "Activist", "gridlines": {"count": 6}
		        },
		        "hAxis": {
		            "title": "Population"
		        }
		    };

		    activistchart.formatters = {};

			//------- VoterProp CHART ------
		    var voterpropchart = {};
		    voterpropchart.type = "AreaChart";
		    voterpropchart.cssStyle = "height:500px; width:1000px;";
		    voterpropchart.data = {"cols": [
		        {id: "Voter Propensity", label: "Voter Propensity", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 to 9.99'},
		            {v: voterprop['0 to 9.99']},
		        ]},
		        {c: [
		            {v: '10 to 19.99'},
		            {v: voterprop['10 to 19.99']},
		        ]},
		        {c: [
		            {v: '20 to 29.99'},
		            {v: voterprop['20 to 29.99']}
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: voterprop['30 to 39.99']}
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: voterprop['40 to 49.99']}
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: voterprop['50 to 59.99']}
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: voterprop['60 to 69.99']}
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: voterprop['70 to 79.99']}
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: voterprop['80 to 89.99']}
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: voterprop['90 to 100']}
		        ]}
		    ]};

		    voterpropchart.options = {
		        "title": "Voter Propensity",
		        "isStacked": "true",
		        "fill": 20,
		        "displayExactValues": true,
		        "vAxis": {
		            "title": "Voter Propensity", "gridlines": {"count": 6}
		        },
		        "hAxis": {
		            "title": "Population"
		        }
		    };

		    voterpropchart.formatters = {};




// Heatmap data: 500 Points



		   //Scoping to the View
		   $scope.partychart = partychart;
		   $scope.racechart = racechart;
		   $scope.agechart = agechart;
		   $scope.ideologychart = ideologychart;
		   $scope.partisanshipchart = partisanshipchart;
		   $scope.activistchart = activistchart
		   $scope.voterpropchart = voterpropchart
		   







			});
	})
.controller('LayerHeatmapCtrl', function($scope) {
  var heatmap;
  $scope.$on('mapInitialized', function(event, map) {
    heatmap = map.heatmapLayers.foo;
  });
var taxiData = [
  new google.maps.LatLng(37.782551, -122.445368),
  new google.maps.LatLng(37.782745, -122.444586),
  new google.maps.LatLng(37.782842, -122.443688),
  new google.maps.LatLng(37.782919, -122.442815),
  new google.maps.LatLng(37.782992, -122.442112),
  new google.maps.LatLng(37.783100, -122.441461),
  new google.maps.LatLng(37.783206, -122.440829),
  new google.maps.LatLng(37.783273, -122.440324),
  new google.maps.LatLng(37.783316, -122.440023),
  new google.maps.LatLng(37.783357, -122.439794),
  new google.maps.LatLng(37.783371, -122.439687),
  new google.maps.LatLng(37.783368, -122.439666),
  new google.maps.LatLng(37.783383, -122.439594),
  new google.maps.LatLng(37.783508, -122.439525),
  new google.maps.LatLng(37.783842, -122.439591),
  new google.maps.LatLng(37.784147, -122.439668),
  new google.maps.LatLng(37.784206, -122.439686),
  new google.maps.LatLng(37.784386, -122.439790),
  new google.maps.LatLng(37.784701, -122.439902),
  new google.maps.LatLng(37.784965, -122.439938),
  new google.maps.LatLng(37.785010, -122.439947),
  new google.maps.LatLng(37.785360, -122.439952),
  new google.maps.LatLng(37.785715, -122.440030),
  new google.maps.LatLng(37.786117, -122.440119),
  new google.maps.LatLng(37.786564, -122.440209),
  new google.maps.LatLng(37.786905, -122.440270),
  new google.maps.LatLng(37.786956, -122.440279),
  new google.maps.LatLng(37.800224, -122.433520),
  new google.maps.LatLng(37.800155, -122.434101),
  new google.maps.LatLng(37.800160, -122.434430),
  new google.maps.LatLng(37.800378, -122.434527),
  new google.maps.LatLng(37.800738, -122.434598),
  new google.maps.LatLng(37.800938, -122.434650),
  new google.maps.LatLng(37.801024, -122.434889),
  new google.maps.LatLng(37.800955, -122.435392),
  new google.maps.LatLng(37.800886, -122.435959),
  new google.maps.LatLng(37.800811, -122.436275),
  new google.maps.LatLng(37.800788, -122.436299),
  new google.maps.LatLng(37.800719, -122.436302),
  new google.maps.LatLng(37.800702, -122.436298),
  new google.maps.LatLng(37.800661, -122.436273),
  new google.maps.LatLng(37.800395, -122.436172),
  new google.maps.LatLng(37.800228, -122.436116),
  new google.maps.LatLng(37.800169, -122.436130),
  new google.maps.LatLng(37.800066, -122.436167),
  new google.maps.LatLng(37.784345, -122.422922),
  new google.maps.LatLng(37.784389, -122.422926),
  new google.maps.LatLng(37.784437, -122.422924),
  new google.maps.LatLng(37.784746, -122.422818),
  new google.maps.LatLng(37.785436, -122.422959),
  new google.maps.LatLng(37.786120, -122.423112),
  new google.maps.LatLng(37.786433, -122.423029),
  new google.maps.LatLng(37.786631, -122.421213),
  new google.maps.LatLng(37.786660, -122.421033),
  new google.maps.LatLng(37.786801, -122.420141),
  new google.maps.LatLng(37.786823, -122.420034),
  new google.maps.LatLng(37.786831, -122.419916),
  new google.maps.LatLng(37.787034, -122.418208),
  new google.maps.LatLng(37.787056, -122.418034),
  new google.maps.LatLng(37.787169, -122.417145),
  new google.maps.LatLng(37.787217, -122.416715),
  new google.maps.LatLng(37.786144, -122.416403),
  new google.maps.LatLng(37.785292, -122.416257),
  new google.maps.LatLng(37.780666, -122.390374),
  new google.maps.LatLng(37.780501, -122.391281),
  new google.maps.LatLng(37.780148, -122.392052),
  new google.maps.LatLng(37.780173, -122.391148),
  new google.maps.LatLng(37.780693, -122.390592),
  new google.maps.LatLng(37.781261, -122.391142),
  new google.maps.LatLng(37.781808, -122.391730),
  new google.maps.LatLng(37.782340, -122.392341),
  new google.maps.LatLng(37.782812, -122.393022),
  new google.maps.LatLng(37.783300, -122.393672),
  new google.maps.LatLng(37.783809, -122.394275),
  new google.maps.LatLng(37.784246, -122.394979),
  new google.maps.LatLng(37.784791, -122.395958),
  new google.maps.LatLng(37.785675, -122.396746),
  new google.maps.LatLng(37.786262, -122.395780),
  new google.maps.LatLng(37.786776, -122.395093),
  new google.maps.LatLng(37.787282, -122.394426),
  new google.maps.LatLng(37.787783, -122.393767),
  new google.maps.LatLng(37.788343, -122.393184),
  new google.maps.LatLng(37.788895, -122.392506),
  new google.maps.LatLng(37.789371, -122.391701),
  new google.maps.LatLng(37.789722, -122.390952),
  new google.maps.LatLng(37.790315, -122.390305),
  new google.maps.LatLng(37.790738, -122.389616),
  new google.maps.LatLng(37.779448, -122.438702),
  new google.maps.LatLng(37.779023, -122.438585),
  new google.maps.LatLng(37.778542, -122.438492),
  new google.maps.LatLng(37.778100, -122.438411),
  new google.maps.LatLng(37.777986, -122.438376),
  new google.maps.LatLng(37.777680, -122.438313),
  new google.maps.LatLng(37.777316, -122.438273),
  new google.maps.LatLng(37.777135, -122.438254),
  new google.maps.LatLng(37.776987, -122.438303),
  new google.maps.LatLng(37.776946, -122.438404),
  new google.maps.LatLng(37.776944, -122.438467),
  new google.maps.LatLng(37.776892, -122.438459),
  new google.maps.LatLng(37.776842, -122.438442),
  new google.maps.LatLng(37.776822, -122.438391),
  new google.maps.LatLng(37.776814, -122.438412),
  new google.maps.LatLng(37.776787, -122.438628),
  new google.maps.LatLng(37.776729, -122.438650),
  new google.maps.LatLng(37.776759, -122.438677),
  new google.maps.LatLng(37.776772, -122.438498),
  new google.maps.LatLng(37.776787, -122.438389),
  new google.maps.LatLng(37.776848, -122.438283),
  new google.maps.LatLng(37.776870, -122.438239),
  new google.maps.LatLng(37.777015, -122.438198),
  new google.maps.LatLng(37.777333, -122.438256),
  new google.maps.LatLng(37.777595, -122.438308),
  new google.maps.LatLng(37.777797, -122.438344),
  new google.maps.LatLng(37.778160, -122.438442),
  new google.maps.LatLng(37.778414, -122.438508),
  new google.maps.LatLng(37.778445, -122.438516),
  new google.maps.LatLng(37.778503, -122.438529),
  new google.maps.LatLng(37.778607, -122.438549),
  new google.maps.LatLng(37.778670, -122.438644),
  new google.maps.LatLng(37.778847, -122.438706),
  new google.maps.LatLng(37.779240, -122.438744),
  new google.maps.LatLng(37.779738, -122.438822),
  new google.maps.LatLng(37.780201, -122.438882),
  new google.maps.LatLng(37.780400, -122.438905),
  new google.maps.LatLng(37.780501, -122.438921),
  new google.maps.LatLng(37.780892, -122.438986),
  new google.maps.LatLng(37.781446, -122.439087),
  new google.maps.LatLng(37.781985, -122.439199),
  new google.maps.LatLng(37.782239, -122.439249),
  new google.maps.LatLng(37.782286, -122.439266),
  new google.maps.LatLng(37.797847, -122.429388),
  new google.maps.LatLng(37.797874, -122.429180),
  new google.maps.LatLng(37.797885, -122.429069),
  new google.maps.LatLng(37.797887, -122.429050),
  new google.maps.LatLng(37.797933, -122.428954),
  new google.maps.LatLng(37.798242, -122.428990),
  new google.maps.LatLng(37.798617, -122.429075),
  new google.maps.LatLng(37.798719, -122.429092),
  new google.maps.LatLng(37.798944, -122.429145),
  new google.maps.LatLng(37.799320, -122.429251),
  new google.maps.LatLng(37.799590, -122.429309),
  new google.maps.LatLng(37.799677, -122.429324),
  new google.maps.LatLng(37.799966, -122.429360),
  new google.maps.LatLng(37.800288, -122.429430),
  new google.maps.LatLng(37.800443, -122.429461),
  new google.maps.LatLng(37.800465, -122.429474),
  new google.maps.LatLng(37.800644, -122.429540),
  new google.maps.LatLng(37.800948, -122.429620),
  new google.maps.LatLng(37.801242, -122.429685),
  new google.maps.LatLng(37.801375, -122.429702),
  new google.maps.LatLng(37.801400, -122.429703),
  new google.maps.LatLng(37.801453, -122.429707),
  new google.maps.LatLng(37.801473, -122.429709),
  new google.maps.LatLng(37.801532, -122.429707),
  new google.maps.LatLng(37.801852, -122.429729),
  new google.maps.LatLng(37.802173, -122.429789),
  new google.maps.LatLng(37.802459, -122.429847),
  new google.maps.LatLng(37.802554, -122.429825),
  new google.maps.LatLng(37.802647, -122.429549),
  new google.maps.LatLng(37.802693, -122.429179),
  new google.maps.LatLng(37.802729, -122.428751),
  new google.maps.LatLng(37.766104, -122.409291),
  new google.maps.LatLng(37.766103, -122.409268),
  new google.maps.LatLng(37.766138, -122.409229),
  new google.maps.LatLng(37.766183, -122.409231),
  new google.maps.LatLng(37.766153, -122.409276),
  new google.maps.LatLng(37.766005, -122.409365),
  new google.maps.LatLng(37.765897, -122.409570),
  new google.maps.LatLng(37.765767, -122.409739),
  new google.maps.LatLng(37.765693, -122.410389),
  new google.maps.LatLng(37.765615, -122.411201),
  new google.maps.LatLng(37.765533, -122.412121),
  new google.maps.LatLng(37.765467, -122.412939),
  new google.maps.LatLng(37.765444, -122.414821),
  new google.maps.LatLng(37.765444, -122.414964),
  new google.maps.LatLng(37.765318, -122.415424),
  new google.maps.LatLng(37.763961, -122.415296),
  new google.maps.LatLng(37.763115, -122.415196),
  new google.maps.LatLng(37.762967, -122.415183),
  new google.maps.LatLng(37.762278, -122.415127),
  new google.maps.LatLng(37.761675, -122.415055),
  new google.maps.LatLng(37.760932, -122.414988),
  new google.maps.LatLng(37.759337, -122.414862),
  new google.maps.LatLng(37.773187, -122.421922),
  new google.maps.LatLng(37.773043, -122.422118),
  new google.maps.LatLng(37.773007, -122.422165),
  new google.maps.LatLng(37.772979, -122.422219),
  new google.maps.LatLng(37.772865, -122.422394),
  new google.maps.LatLng(37.772779, -122.422503),
  new google.maps.LatLng(37.772676, -122.422701),
  new google.maps.LatLng(37.772606, -122.422806),
  new google.maps.LatLng(37.772566, -122.422840),
  new google.maps.LatLng(37.772508, -122.422852),
  new google.maps.LatLng(37.772387, -122.423011),
  new google.maps.LatLng(37.772099, -122.423328),
  new google.maps.LatLng(37.771704, -122.423783),
  new google.maps.LatLng(37.771481, -122.424081),
  new google.maps.LatLng(37.771400, -122.424179),
  new google.maps.LatLng(37.771352, -122.424220),
  new google.maps.LatLng(37.771248, -122.424327),
  new google.maps.LatLng(37.770904, -122.424781),
  new google.maps.LatLng(37.770520, -122.425283),
  new google.maps.LatLng(37.770337, -122.425553),
  new google.maps.LatLng(37.770128, -122.425832),
  new google.maps.LatLng(37.769756, -122.426331),
  new google.maps.LatLng(37.769300, -122.426902),
  new google.maps.LatLng(37.769132, -122.427065),
  new google.maps.LatLng(37.769092, -122.427103),
  new google.maps.LatLng(37.768979, -122.427172),
  new google.maps.LatLng(37.768595, -122.427634),
  new google.maps.LatLng(37.768372, -122.427913),
  new google.maps.LatLng(37.768337, -122.427961),
  new google.maps.LatLng(37.768244, -122.428138),
  new google.maps.LatLng(37.767942, -122.428581),
  new google.maps.LatLng(37.767482, -122.429094),
  new google.maps.LatLng(37.767031, -122.429606),
  new google.maps.LatLng(37.766732, -122.429986),
  new google.maps.LatLng(37.766680, -122.430058),
  new google.maps.LatLng(37.766633, -122.430109),
  new google.maps.LatLng(37.766580, -122.430211),
  new google.maps.LatLng(37.766367, -122.430594),
  new google.maps.LatLng(37.765910, -122.431137),
  new google.maps.LatLng(37.765353, -122.431806),
  new google.maps.LatLng(37.764962, -122.432298),
  new google.maps.LatLng(37.764868, -122.432486),
  new google.maps.LatLng(37.764518, -122.432913),
  new google.maps.LatLng(37.763435, -122.434173),
  new google.maps.LatLng(37.762847, -122.434953),
  new google.maps.LatLng(37.762291, -122.435935),
  new google.maps.LatLng(37.762224, -122.436074),
  new google.maps.LatLng(37.761957, -122.436892),
  new google.maps.LatLng(37.761652, -122.438886),
  new google.maps.LatLng(37.761284, -122.439955),
  new google.maps.LatLng(37.761210, -122.440068),
  new google.maps.LatLng(37.761064, -122.440720),
  new google.maps.LatLng(37.761040, -122.441411),
  new google.maps.LatLng(37.761048, -122.442324),
  new google.maps.LatLng(37.760851, -122.443118),
  new google.maps.LatLng(37.759977, -122.444591),
  new google.maps.LatLng(37.759913, -122.444698),
  new google.maps.LatLng(37.759623, -122.445065),
  new google.maps.LatLng(37.758902, -122.445158),
  new google.maps.LatLng(37.758428, -122.444570),
  new google.maps.LatLng(37.757687, -122.443340),
  new google.maps.LatLng(37.757583, -122.443240),
  new google.maps.LatLng(37.757019, -122.442787),
  new google.maps.LatLng(37.756603, -122.442322),
  new google.maps.LatLng(37.756380, -122.441602),
  new google.maps.LatLng(37.755790, -122.441382),
  new google.maps.LatLng(37.754493, -122.442133),
  new google.maps.LatLng(37.754361, -122.442206),
  new google.maps.LatLng(37.753719, -122.442650),
  new google.maps.LatLng(37.753096, -122.442915),
  new google.maps.LatLng(37.751617, -122.443211),
  new google.maps.LatLng(37.751496, -122.443246),
  new google.maps.LatLng(37.750733, -122.443428),
  new google.maps.LatLng(37.750126, -122.443536),
  new google.maps.LatLng(37.750103, -122.443784),
  new google.maps.LatLng(37.750390, -122.444010),
  new google.maps.LatLng(37.750448, -122.444013),
  new google.maps.LatLng(37.750536, -122.444040),
  new google.maps.LatLng(37.750493, -122.444141),
  new google.maps.LatLng(37.790859, -122.402808),
  new google.maps.LatLng(37.790864, -122.402768),
  new google.maps.LatLng(37.790995, -122.402539),
  new google.maps.LatLng(37.791148, -122.402172),
  new google.maps.LatLng(37.791385, -122.401312),
  new google.maps.LatLng(37.791405, -122.400776),
  new google.maps.LatLng(37.791288, -122.400528),
  new google.maps.LatLng(37.791113, -122.400441),
  new google.maps.LatLng(37.791027, -122.400395),
  new google.maps.LatLng(37.791094, -122.400311),
  new google.maps.LatLng(37.791211, -122.400183),
  new google.maps.LatLng(37.791060, -122.399334),
  new google.maps.LatLng(37.790538, -122.398718),
  new google.maps.LatLng(37.790095, -122.398086),
  new google.maps.LatLng(37.789644, -122.397360),
  new google.maps.LatLng(37.789254, -122.396844),
  new google.maps.LatLng(37.788855, -122.396397),
  new google.maps.LatLng(37.788483, -122.395963),
  new google.maps.LatLng(37.788015, -122.395365),
  new google.maps.LatLng(37.787558, -122.394735),
  new google.maps.LatLng(37.787472, -122.394323),
  new google.maps.LatLng(37.787630, -122.394025),
  new google.maps.LatLng(37.787767, -122.393987),
  new google.maps.LatLng(37.787486, -122.394452),
  new google.maps.LatLng(37.786977, -122.395043),
  new google.maps.LatLng(37.786583, -122.395552),
  new google.maps.LatLng(37.786540, -122.395610),
  new google.maps.LatLng(37.786516, -122.395659),
  new google.maps.LatLng(37.786378, -122.395707),
  new google.maps.LatLng(37.786044, -122.395362),
  new google.maps.LatLng(37.785598, -122.394715),
  new google.maps.LatLng(37.785321, -122.394361),
  new google.maps.LatLng(37.785207, -122.394236),
  new google.maps.LatLng(37.785751, -122.394062),
  new google.maps.LatLng(37.785996, -122.393881),
  new google.maps.LatLng(37.786092, -122.393830),
  new google.maps.LatLng(37.785998, -122.393899),
  new google.maps.LatLng(37.785114, -122.394365),
  new google.maps.LatLng(37.785022, -122.394441),
  new google.maps.LatLng(37.784823, -122.394635),
  new google.maps.LatLng(37.784719, -122.394629),
  new google.maps.LatLng(37.785069, -122.394176),
  new google.maps.LatLng(37.785500, -122.393650),
  new google.maps.LatLng(37.785770, -122.393291),
  new google.maps.LatLng(37.785839, -122.393159),
  new google.maps.LatLng(37.782651, -122.400628),
  new google.maps.LatLng(37.782616, -122.400599),
  new google.maps.LatLng(37.782702, -122.400470),
  new google.maps.LatLng(37.782915, -122.400192),
  new google.maps.LatLng(37.783137, -122.399887),
  new google.maps.LatLng(37.783414, -122.399519),
  new google.maps.LatLng(37.783629, -122.399237),
  new google.maps.LatLng(37.783688, -122.399157),
  new google.maps.LatLng(37.783716, -122.399106),
  new google.maps.LatLng(37.783798, -122.399072),
  new google.maps.LatLng(37.783997, -122.399186),
  new google.maps.LatLng(37.784271, -122.399538),
  new google.maps.LatLng(37.784577, -122.399948),
  new google.maps.LatLng(37.784828, -122.400260),
  new google.maps.LatLng(37.784999, -122.400477),
  new google.maps.LatLng(37.785113, -122.400651),
  new google.maps.LatLng(37.785155, -122.400703),
  new google.maps.LatLng(37.785192, -122.400749),
  new google.maps.LatLng(37.785278, -122.400839),
  new google.maps.LatLng(37.785387, -122.400857),
  new google.maps.LatLng(37.785478, -122.400890),
  new google.maps.LatLng(37.785526, -122.401022),
  new google.maps.LatLng(37.785598, -122.401148),
  new google.maps.LatLng(37.785631, -122.401202),
  new google.maps.LatLng(37.785660, -122.401267),
  new google.maps.LatLng(37.803986, -122.426035),
  new google.maps.LatLng(37.804102, -122.425089),
  new google.maps.LatLng(37.804211, -122.424156),
  new google.maps.LatLng(37.803861, -122.423385),
  new google.maps.LatLng(37.803151, -122.423214),
  new google.maps.LatLng(37.802439, -122.423077),
  new google.maps.LatLng(37.801740, -122.422905),
  new google.maps.LatLng(37.801069, -122.422785),
  new google.maps.LatLng(37.800345, -122.422649),
  new google.maps.LatLng(37.799633, -122.422603),
  new google.maps.LatLng(37.799750, -122.421700),
  new google.maps.LatLng(37.799885, -122.420854),
  new google.maps.LatLng(37.799209, -122.420607),
  new google.maps.LatLng(37.795656, -122.400395),
  new google.maps.LatLng(37.795203, -122.400304),
  new google.maps.LatLng(37.778738, -122.415584),
  new google.maps.LatLng(37.778812, -122.415189),
  new google.maps.LatLng(37.778824, -122.415092),
  new google.maps.LatLng(37.778833, -122.414932),
  new google.maps.LatLng(37.778834, -122.414898),
  new google.maps.LatLng(37.778740, -122.414757),
  new google.maps.LatLng(37.778501, -122.414433),
  new google.maps.LatLng(37.778182, -122.414026),
  new google.maps.LatLng(37.777851, -122.413623),
  new google.maps.LatLng(37.777486, -122.413166),
  new google.maps.LatLng(37.777109, -122.412674),
  new google.maps.LatLng(37.776743, -122.412186),
  new google.maps.LatLng(37.776440, -122.411800),
  new google.maps.LatLng(37.776295, -122.411614),
  new google.maps.LatLng(37.776158, -122.411440),
  new google.maps.LatLng(37.775806, -122.410997),
  new google.maps.LatLng(37.775422, -122.410484),
  new google.maps.LatLng(37.775126, -122.410087),
  new google.maps.LatLng(37.775012, -122.409854),
  new google.maps.LatLng(37.775164, -122.409573),
  new google.maps.LatLng(37.775498, -122.409180),
  new google.maps.LatLng(37.775868, -122.408730),
  new google.maps.LatLng(37.776256, -122.408240),
  new google.maps.LatLng(37.776519, -122.407928),
  new google.maps.LatLng(37.776539, -122.407904),
  new google.maps.LatLng(37.776595, -122.407854),
  new google.maps.LatLng(37.776853, -122.407547),
  new google.maps.LatLng(37.777234, -122.407087),
  new google.maps.LatLng(37.777644, -122.406558),
  new google.maps.LatLng(37.778066, -122.406017),
  new google.maps.LatLng(37.778468, -122.405499),
  new google.maps.LatLng(37.778866, -122.404995),
  new google.maps.LatLng(37.779295, -122.404455),
  new google.maps.LatLng(37.779695, -122.403950),
  new google.maps.LatLng(37.779982, -122.403584),
  new google.maps.LatLng(37.780295, -122.403223),
  new google.maps.LatLng(37.780664, -122.402766),
  new google.maps.LatLng(37.781043, -122.402288),
  new google.maps.LatLng(37.781399, -122.401823),
  new google.maps.LatLng(37.781727, -122.401407),
  new google.maps.LatLng(37.781853, -122.401247),
  new google.maps.LatLng(37.781894, -122.401195),
  new google.maps.LatLng(37.782076, -122.400977),
  new google.maps.LatLng(37.782338, -122.400603),
  new google.maps.LatLng(37.782666, -122.400133),
  new google.maps.LatLng(37.783048, -122.399634),
  new google.maps.LatLng(37.783450, -122.399198),
  new google.maps.LatLng(37.783791, -122.398998),
  new google.maps.LatLng(37.784177, -122.398959),
  new google.maps.LatLng(37.784388, -122.398971),
  new google.maps.LatLng(37.784404, -122.399128),
  new google.maps.LatLng(37.784586, -122.399524),
  new google.maps.LatLng(37.784835, -122.399927),
  new google.maps.LatLng(37.785116, -122.400307),
  new google.maps.LatLng(37.785282, -122.400539),
  new google.maps.LatLng(37.785346, -122.400692),
  new google.maps.LatLng(37.765769, -122.407201),
  new google.maps.LatLng(37.765790, -122.407414),
  new google.maps.LatLng(37.765802, -122.407755),
  new google.maps.LatLng(37.765791, -122.408219),
  new google.maps.LatLng(37.765763, -122.408759),
  new google.maps.LatLng(37.765726, -122.409348),
  new google.maps.LatLng(37.765716, -122.409882),
  new google.maps.LatLng(37.765708, -122.410202),
  new google.maps.LatLng(37.765705, -122.410253),
  new google.maps.LatLng(37.765707, -122.410369),
  new google.maps.LatLng(37.765692, -122.410720),
  new google.maps.LatLng(37.765699, -122.411215),
  new google.maps.LatLng(37.765687, -122.411789),
  new google.maps.LatLng(37.765666, -122.412373),
  new google.maps.LatLng(37.765598, -122.412883),
  new google.maps.LatLng(37.765543, -122.413039),
  new google.maps.LatLng(37.765532, -122.413125),
  new google.maps.LatLng(37.765500, -122.413553),
  new google.maps.LatLng(37.765448, -122.414053),
  new google.maps.LatLng(37.765388, -122.414645),
  new google.maps.LatLng(37.765323, -122.415250),
  new google.maps.LatLng(37.765303, -122.415847),
  new google.maps.LatLng(37.765251, -122.416439),
  new google.maps.LatLng(37.765204, -122.417020),
  new google.maps.LatLng(37.765172, -122.417556),
  new google.maps.LatLng(37.765164, -122.418075),
  new google.maps.LatLng(37.765153, -122.418618),
  new google.maps.LatLng(37.765136, -122.419112),
  new google.maps.LatLng(37.765129, -122.419378),
  new google.maps.LatLng(37.765119, -122.419481),
  new google.maps.LatLng(37.765100, -122.419852),
  new google.maps.LatLng(37.765083, -122.420349),
  new google.maps.LatLng(37.765045, -122.420930),
  new google.maps.LatLng(37.764992, -122.421481),
  new google.maps.LatLng(37.764980, -122.421695),
  new google.maps.LatLng(37.764993, -122.421843),
  new google.maps.LatLng(37.764986, -122.422255),
  new google.maps.LatLng(37.764975, -122.422823),
  new google.maps.LatLng(37.764939, -122.423411),
  new google.maps.LatLng(37.764902, -122.424014),
  new google.maps.LatLng(37.764853, -122.424576),
  new google.maps.LatLng(37.764826, -122.424922),
  new google.maps.LatLng(37.764796, -122.425375),
  new google.maps.LatLng(37.764782, -122.425869),
  new google.maps.LatLng(37.764768, -122.426089),
  new google.maps.LatLng(37.764766, -122.426117),
  new google.maps.LatLng(37.764723, -122.426276),
  new google.maps.LatLng(37.764681, -122.426649),
  new google.maps.LatLng(37.782012, -122.404200),
  new google.maps.LatLng(37.781574, -122.404911),
  new google.maps.LatLng(37.781055, -122.405597),
  new google.maps.LatLng(37.780479, -122.406341),
  new google.maps.LatLng(37.779996, -122.406939),
  new google.maps.LatLng(37.779459, -122.407613),
  new google.maps.LatLng(37.778953, -122.408228),
  new google.maps.LatLng(37.778409, -122.408839),
  new google.maps.LatLng(37.777842, -122.409501),
  new google.maps.LatLng(37.777334, -122.410181),
  new google.maps.LatLng(37.776809, -122.410836),
  new google.maps.LatLng(37.776240, -122.411514),
  new google.maps.LatLng(37.775725, -122.412145),
  new google.maps.LatLng(37.775190, -122.412805),
  new google.maps.LatLng(37.774672, -122.413464),
  new google.maps.LatLng(37.774084, -122.414186),
  new google.maps.LatLng(37.773533, -122.413636),
  new google.maps.LatLng(37.773021, -122.413009),
  new google.maps.LatLng(37.772501, -122.412371),
  new google.maps.LatLng(37.771964, -122.411681),
  new google.maps.LatLng(37.771479, -122.411078),
  new google.maps.LatLng(37.770992, -122.410477),
  new google.maps.LatLng(37.770467, -122.409801),
  new google.maps.LatLng(37.770090, -122.408904),
  new google.maps.LatLng(37.769657, -122.408103),
  new google.maps.LatLng(37.769132, -122.407276),
  new google.maps.LatLng(37.768564, -122.406469),
  new google.maps.LatLng(37.767980, -122.405745),
  new google.maps.LatLng(37.767380, -122.405299),
  new google.maps.LatLng(37.766604, -122.405297),
  new google.maps.LatLng(37.765838, -122.405200),
  new google.maps.LatLng(37.765139, -122.405139),
  new google.maps.LatLng(37.764457, -122.405094),
  new google.maps.LatLng(37.763716, -122.405142),
  new google.maps.LatLng(37.762932, -122.405398),
  new google.maps.LatLng(37.762126, -122.405813),
  new google.maps.LatLng(37.761344, -122.406215),
  new google.maps.LatLng(37.760556, -122.406495),
  new google.maps.LatLng(37.759732, -122.406484),
  new google.maps.LatLng(37.758910, -122.406228),
  new google.maps.LatLng(37.758182, -122.405695),
  new google.maps.LatLng(37.757676, -122.405118),
  new google.maps.LatLng(37.757039, -122.404346),
  new google.maps.LatLng(37.756335, -122.403719),
  new google.maps.LatLng(37.755503, -122.403406),
  new google.maps.LatLng(37.754665, -122.403242),
  new google.maps.LatLng(37.753837, -122.403172),
  new google.maps.LatLng(37.752986, -122.403112),
  new google.maps.LatLng(37.751266, -122.403355)
];

});