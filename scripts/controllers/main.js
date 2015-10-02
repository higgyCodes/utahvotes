'use strict';

/**
 * @ngdoc function
 * @name utahvotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utahvotesApp
 */
angular.module('utahvotesApp', ['googlechart', 'ngMap'])
  .controller('MainCtrl', function ($scope, dataService) {


  	dataService.testrun()

  	var testrun = []
	var party = {
		'Democrats' : 0,
		'Republicans' : 0,
		'Other' : 0
	};
	var sex = {
		'Male' : 0,
		'Female' : 0,
		'Unknown' : 0
	};
	var race = {
		'Caucasian' : 0,
		'Hispanic' : 0,
		'Other' : 0
	};
	var age = {
		'18 to 24' : 0,
		'25 to 34' : 0,
		'35 to 49' : 0,
		'50 to 64' : 0,
		'65 + ' : 0,
		'unknown' : 0
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
		'90 to 100' : 0,
		'unknown' : 0,
		'total': 0
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
		'90 to 100' : 0,
		'unknown' : 0,
		'total': 0
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
		'90 to 100' : 0,
		'unknown' : 0,
		'total' : 0
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
		'90 to 100' : 0,
		'unknown' : 0,
		'total': 0
	}
	var timesVoted = {
		'0 of 3' : 0,
		'1 of 3' : 0,
		'2 of 3' : 0,
		'3 of 3' : 0
	}


    $scope.$on('packagedeal', function(event, data) {
	   	var vanimport = d3.tsv.parse(data);

		dataService.nameModifications(vanimport)

		dataService.stringToData(vanimport)

		console.log(vanimport)
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

		    if (d.Sex == 'M') {
		    	sex.Male += 1
		    } else if (d.Sex == 'F') {
		    	sex.Female += 1
		    } else { sex.Unknown += 1
		    }
		});
		
		    
		vanimport.forEach(function(d){
		    if (d.Age < 25) {
		    	age['18 to 24'] += 1
		    } else if (d.Age < 35) {
		    	age['25 to 34'] += 1
		    } else if (d.Age < 50) {
		    	age['35 to 49'] += 1
		    } else if (d.Age < 65) {
		    	age['50 to 64'] += 1
		    } else if (d.Age > 65) {
		    	age['65 + '] += 1
		    } else (age['unknown'] += 1)
		});

		    //creating ideology data set
		vanimport.forEach(function(d){
		    if (d.Ideology < 10) {
		    	ideology['0 to 9.99'] += 1
		    } else if (d.Ideology < 20) {
		    	ideology['10 to 19.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 30) {
		    	ideology['20 to 29.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 40) {
		    	ideology['30 to 39.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 50) {
		    	ideology['40 to 49.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 60) {
		    	ideology['50 to 59.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 70) {
		    	ideology['60 to 69.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 80) {
		    	ideology['70 to 79.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 90) {
		    	ideology['80 to 89.99'] += 1;
		    	ideology['total'] += 1;
		    } else if (d.Ideology < 90) {
		    	 ideology['90 to 100'] += 1;
		    	 ideology['total'] += 1;
		    } else {ideology['unknown']
			}
		});
		
		vanimport.forEach(function(d){
		   	if (d.Partisanship < 10) {
		    	partisanship['0 to 9.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 20) {
		    	partisanship['10 to 19.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 30) {
		    	partisanship['20 to 29.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 40) {
		    	partisanship['30 to 39.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 50) {
		    	partisanship['40 to 49.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 60) {
		    	partisanship['50 to 59.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 70) {
		    	partisanship['60 to 69.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 80) {
		    	partisanship['70 to 79.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 90) {
		    	partisanship['80 to 89.99'] += 1;
		    	partisanship['total'] += 1;
		    } else if (d.Partisanship < 100){ 
		    	partisanship['90 to 100'] += 1;
		    	partisanship['total'] += 1;
		    } else {partisanship['unknown']}
		})

		vanimport.forEach(function(d){
		   	if (d.Activist < 10) {
		    	activist['0 to 9.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 20) {
		    	activist['10 to 19.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 30) {
		    	activist['20 to 29.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 40) {
		    	activist['30 to 39.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 50) {
		    	activist['40 to 49.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 60) {
		    	activist['50 to 59.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 70) {
		    	activist['60 to 69.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 80) {
		    	activist['70 to 79.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 90) {
		    	activist['80 to 89.99'] += 1;
		    	activist['total'] += 1;
		    } else if (d.Activist < 100) {
		     	activist['90 to 100'] += 1;
		     	activist['total'] += 1;
		    } else {activist['unknown']}
		    });

		vanimport.forEach(function(d){
		    if (d.VoterProp < 10) {
		    	voterprop['0 to 9.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 20) {
		    	voterprop['10 to 19.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 30) {
		    	voterprop['20 to 29.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 40) {
		    	voterprop['30 to 39.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 50) {
		    	voterprop['40 to 49.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 60) {
		    	voterprop['50 to 59.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 70) {
		    	voterprop['60 to 69.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 80) {
		    	voterprop['70 to 79.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 90) {
		    	voterprop['80 to 89.99'] += 1;
		    	voterprop['total'] += 1;
		    } else if (d.VoterProp < 100) {
		     	voterprop['90 to 100'] += 1;
		     	voterprop['total'] += 1;
		    } else {voterprop['unknown']
			}
		})
		

		
		vanimport.forEach(function(d){
			var voteCount = 0
			if (d.General14 != "") {
				voteCount += 1
			};
			if (d.Special13 != "") {
				voteCount += 1
			};
			if (d.General12 != "") {
				voteCount += 1
			};
			
			if (voteCount === 0) {
				timesVoted['0 of 3'] += 1
			} else if (voteCount === 1) {
				timesVoted['1 of 3'] += 1
			} else if (voteCount === 2) {
				timesVoted['2 of 3'] += 1
			} else {timesVoted['3 of 3'] += 1};
		});

		console.log(timesVoted);
		console.log(voterprop)

		// ======= UTAH AVERAGES

		var utahIAverage = {
			'0 to 9.99' : Math.floor(ideology['total'] * 0.106 / 100),
			'10 to 19.99' : Math.floor(ideology['total'] * 6.914 / 100),
			'20 to 29.99' : Math.floor(ideology['total'] * 25.599 / 100),
			'30 to 39.99' : Math.floor(ideology['total'] * 25.277 / 100),
			'40 to 49.99' : Math.floor(ideology['total'] * 17.423 / 100),
			'50 to 59.99' : Math.floor(ideology['total'] * 13.717 / 100),
			'60 to 69.99' : Math.floor(ideology['total'] * 6.808 / 100),
			'70 to 79.99' : Math.floor(ideology['total'] * 3.146 / 100),
			'80 to 89.99' : Math.floor(ideology['total'] * 0.972 / 100),
			'90 to 100' : Math.floor(ideology['total'] * 0.040 / 100),
		}
		var utahPAverage = {
			'0 to 9.99' : Math.floor(partisanship['total'] * 42.123 / 100),
			'10 to 19.99' : Math.floor(partisanship['total'] * 9.271 / 100),
			'20 to 29.99' : Math.floor(partisanship['total'] * 5.506 / 100),
			'30 to 39.99' : Math.floor(partisanship['total'] * 8.954 / 100),
			'40 to 49.99' : Math.floor(partisanship['total'] * 9.598 / 100),
			'50 to 59.99' : Math.floor(partisanship['total'] * 8.039 / 100),
			'60 to 69.99' : Math.floor(partisanship['total'] * 5.500 / 100),
			'70 to 79.99' : Math.floor(partisanship['total'] * 2.367 / 100),
			'80 to 89.99' : Math.floor(partisanship['total'] * 4.599 / 100),
			'90 to 100' : Math.floor(partisanship['total'] * 4.043 / 100),
		}
		var utahVAverage = {
			'0 to 9.99' : Math.floor(voterprop['total'] * 8.394 / 100),
			'10 to 19.99' : Math.floor(voterprop['total'] * 8.507 / 100),
			'20 to 29.99' : Math.floor(voterprop['total'] * 7.819 / 100),
			'30 to 39.99' : Math.floor(voterprop['total'] * 9.763 / 100),
			'40 to 49.99' : Math.floor(voterprop['total'] * 10.153 / 100),
			'50 to 59.99' : Math.floor(voterprop['total'] * 8.646 / 100),
			'60 to 69.99' : Math.floor(voterprop['total'] * 8.860 / 100),
			'70 to 79.99' : Math.floor(voterprop['total'] * 12.731 / 100),
			'80 to 89.99' : Math.floor(voterprop['total'] * 21.779 / 100),
			'90 to 100' : Math.floor(voterprop['total'] * 3.348 / 100),
		}




			// ====== GEOCODES ===========


			//Race Chart
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
		            {v: sex.Male},
		            
		        ]},
		        {c: [
		            {v: "Female"},
		            {v: sex.Female},
		        ]},
		        {c: [
		            {v: "Unknown"},
		            {v: sex.Unknown}
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
		    agechart.cssStyle = "height:500px; width:1000px;";
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
		    ideologychart.type = "LineChart";
		    ideologychart.cssStyle = "height:500px; width:1000px;";
		    ideologychart.data = {"cols": [
		        {id: "ideology", label: "Ideology", type: "string"},
		        {id: "population", label: "Population", type: "number"},
		        {id: "utahave", label: "Utah State Average", type: "number"}

		    ], "rows": [
		        {c: [
		            {v: '0 to 9.99'},
		            {v: ideology['0 to 9.99']},
		            {v: utahIAverage['0 to 9.99']}
		        ]},
		        {c: [
		            {v: '10 to 19.99'},
		            {v: ideology['10 to 19.99']},
		            {v: utahIAverage['10 to 19.99']}
		        ]},
		        {c: [
		            {v: '20 to 29.99'},
		            {v: ideology['20 to 29.99']},
		            {v: utahIAverage['20 to 29.99']}
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: ideology['30 to 39.99']},
		            {v: utahIAverage['30 to 39.99']}
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: ideology['40 to 49.99']},
		            {v: utahIAverage['40 to 49.99']}
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: ideology['50 to 59.99']},
		            {v: utahIAverage['50 to 59.99']}
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: ideology['60 to 69.99']},
		            {v: utahIAverage['60 to 69.99']}
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: ideology['70 to 79.99']},
		            {v: utahIAverage['70 to 79.99']}
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: ideology['80 to 89.99']},
		            {v: utahIAverage['80 to 89.99']}
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: ideology['90 to 100']},
		            {v: utahIAverage['90 to 100']}
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
		    partisanshipchart.type = "LineChart";
		    partisanshipchart.cssStyle = "height:500px; width:1000px;";
		    partisanshipchart.data = {"cols": [
		        {id: "partisanship", label: "Partisanship", type: "string"},
		        {id: "population", label: "Population", type: "number"},
		        {id: "utahave", label: "Utah State Average", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 to 9.99'},
		            {v: partisanship['0 to 9.99']},
		            {v: utahPAverage['0 to 9.99']}
		        ]},
		        {c: [
		            {v: '10 to 19.99'},
		            {v: partisanship['10 to 19.99']},
		            {v: utahPAverage['10 to 19.99']}
		        ]},
		        {c: [
		            {v: '20 to 29.99'},
		            {v: partisanship['20 to 29.99']},
		            {v: utahPAverage['20 to 29.99']}
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: partisanship['30 to 39.99']},
		            {v: utahPAverage['30 to 39.99']}
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: partisanship['40 to 49.99']},
		            {v: utahPAverage['40 to 49.99']}
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: partisanship['50 to 59.99']},
		            {v: utahPAverage['50 to 59.99']}
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: partisanship['60 to 69.99']},
		            {v: utahPAverage['60 to 69.99']}
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: partisanship['70 to 79.99']},
		            {v: utahPAverage['70 to 79.99']}
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: partisanship['80 to 89.99']},
		            {v: utahPAverage['80 to 89.99']}
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: partisanship['90 to 100']},
		            {v: utahPAverage['90 to 100']}
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
		        {id: "population", label: "Population", type: "number"},
		         
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
		            {v: activist['20 to 29.99']},
		          
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: activist['30 to 39.99']},
		            
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: activist['40 to 49.99']},
		      
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: activist['50 to 59.99']},
		           
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: activist['60 to 69.99']},
		          
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: activist['70 to 79.99']},
		        
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: activist['80 to 89.99']},
		    
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: activist['90 to 100']},
		        
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
		    voterpropchart.type = "LineChart";
		    voterpropchart.cssStyle = "height:500px; width:1000px;";
		    voterpropchart.data = {"cols": [
		        {id: "Voter Propensity", label: "Voter Propensity", type: "string"},
		        {id: "population", label: "Population", type: "number"},
		   		{id: "utahave", label: "Utah State Average", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 to 9.99'},
		            {v: voterprop['0 to 9.99']},
		            {v: utahVAverage['0 to 9.99']}
		        ]},
		        {c: [
		            {v: '10 to 19.99'},
		            {v: voterprop['10 to 19.99']},
		            {v: utahVAverage['10 to 19.99']}
		        ]},
		        {c: [
		            {v: '20 to 29.99'},
		            {v: voterprop['20 to 29.99']},
		            {v: utahVAverage['20 to 29.99']}
		        ]},
		        {c: [
		            {v: '30 to 39.99'},
		            {v: voterprop['30 to 39.99']},
		            {v: utahVAverage['30 to 39.99']}
		        ]},
		        {c: [
		            {v: '40 to 49.99'},
		            {v: voterprop['40 to 49.99']},
		            {v: utahVAverage['40 to 49.99']}
		        ]},
		        {c: [
		            {v: '50 to 59.99'},
		            {v: voterprop['50 to 59.99']},
		            {v: utahVAverage['50 to 59.99']}
		        ]},
		        {c: [
		            {v: '60 to 69.99'},
		            {v: voterprop['60 to 69.99']},
		            {v: utahVAverage['60 to 69.99']}
		        ]},
		        {c: [
		            {v: '70 to 79.99'},
		            {v: voterprop['70 to 79.99']},
		            {v: utahVAverage['70 to 79.99']}
		        ]},
		        {c: [
		            {v: '80 to 89.99'},
		            {v: voterprop['80 to 89.99']},
		            {v: utahVAverage['80 to 89.99']}
		        ]},
		        {c: [
		            {v: '90 to 100'},
		            {v: voterprop['90 to 100']},
		            {v: utahVAverage['90 to 100']}
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





		    //======== TIMES VOTED CHART ============

		    var timesVotedChart = {};
		    timesVotedChart.type = "BarChart";
		    timesVotedChart.data = {"cols": [
		        {id: "Times Voted", label: "Voter Propensity", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 of 3'},
		            {v: timesVoted['0 of 3']}
		        ]},
		        {c: [
		            {v: '1 of 3'},
		            {v: timesVoted['1 of 3']}
		        ]},
		        {c: [
		            {v: '2 of 3'},
		            {v: timesVoted['2 of 3']}
		        ]},
		        {c: [
		            {v: '3 of 3'},
		            {v: timesVoted['3 of 3']}
		        ]}
		    ]};


		    timesVotedChart.options = {
		        "title": "Times Voted",
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

		    timesVotedChart.formatters = {};

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
		   $scope.partychart = partychart;
		   $scope.sexchart = sexchart;
		   $scope.racechart = racechart;
		   $scope.agechart = agechart;
		   $scope.ideologychart = ideologychart;
		   $scope.partisanshipchart = partisanshipchart;
		   $scope.activistchart = activistchart
		   $scope.voterpropchart = voterpropchart
		   $scope.timesVotedChart = timesVotedChart







			});

	})