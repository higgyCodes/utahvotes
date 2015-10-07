'use strict';

angular.module('utahvotesApp')
	.factory('chartService', function (resultTally) {
	var service = {};
	
	service.pieChart = function(chart, id, first, firstobj, second, secondobj, third, thirdobj) {
		chart.type = "PieChart";
		chart.data = {
			"cols": [
		    	{id: id, label: id, type: "string"},
		    	{id: "population", label: "Population", type: "number"}
			], 
			"rows": [
		        {c: [
		            {v: first},
		            {v: firstobj},
		            
		        ]},
		        {c: [
		            {v: second},
		            {v: secondobj},
		        ]},
		        {c: [
		            {v: third},
		            {v: thirdobj}
		        ]}
		    ]};

		chart.options = {
		    "title": id,
		    "isStacked": "true",
		    "fill": 20,
		    "displayExactValues": true,
		    "vAxis": {
		        "title": id, "gridlines": {"count": 6}
		    },
		    "hAxis": {
		            "title": "Population"
		        }
		    };

		    chart.formatters = {};
		    return chart
		}


	service.chartMaker = function(chart, title, data) {
			    chart.type = "AreaChart";
			    chart.cssStyle = "height:500px; width:1000px;";
			    chart.data = {"cols": [
			        {id: data, label: title, type: "string"},
			        {id: "population", label: "Population", type: "number"},

			    ], "rows": [
			        {c: [
			            {v: '0 to 9.99'},
			            {v: data['0 to 9.99']}
			        ]},
			        {c: [
			            {v: '10 to 19.99'},
			            {v: data['10 to 19.99']}
			        ]},
			        {c: [
			            {v: '20 to 29.99'},
			            {v: data['20 to 29.99']}
			        ]},
			        {c: [
			            {v: '30 to 39.99'},
			            {v: data['30 to 39.99']}
			        ]},
			        {c: [
			            {v: '40 to 49.99'},
			            {v: data['40 to 49.99']}
			        ]},
			        {c: [
			            {v: '50 to 59.99'},
			            {v: data['50 to 59.99']}
			        ]},
			        {c: [
			            {v: '60 to 69.99'},
			            {v: data['60 to 69.99']}
			        ]},
			        {c: [
			            {v: '70 to 79.99'},
			            {v: data['70 to 79.99']}
			        ]},
			        {c: [
			            {v: '80 to 89.99'},
			            {v: data['80 to 89.99']}
			        ]},
			        {c: [
			            {v: '90 to 100'},
			            {v: data['90 to 100']}
			        ]}
			    ]};


			    chart.options = {
			        "title": title,
			        "isStacked": "true",
			        "fill": 20,
			        "displayExactValues": true,
			        "vAxis": {
			            "title": title, "gridlines": {"count": 6}
			        },
			        "hAxis": {
			            "title": "Population"
			        }
			    };

			    chart.formatters = {};
			    return chart;
			};

		service.ageChart = function() {
		service.agechart = {};
		    service.agechart.type = "BarChart";
		    service.agechart.cssStyle = "height:500px; width:1000px;";
		    service.agechart.data = {"cols": [
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

		    service.agechart.options = {
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

		    service.agechart.formatters = {};

		return service.agechart
		}

		service.timesVoted = function() {
		service.timesVotedChart = {};
		    service.timesVotedChart.type = "BarChart";
		    service.timesVotedChart.data = {"cols": [
		        {id: "Times Voted", label: "Voter Propensity", type: "string"},
		        {id: "population", label: "Population", type: "number"}
		    ], "rows": [
		        {c: [
		            {v: '0 of 3'},
		            {v: resultTally.timesVoted['0 of 3']}
		        ]},
		        {c: [
		            {v: '1 of 3'},
		            {v: resultTally.timesVoted['1 of 3']}
		        ]},
		        {c: [
		            {v: '2 of 3'},
		            {v: resultTally.timesVoted['2 of 3']}
		        ]},
		        {c: [
		            {v: '3 of 3'},
		            {v: resultTally.timesVoted['3 of 3']}
		        ]}
		    ]};


		    service.timesVotedChart.options = {
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

		    service.timesVotedChart.formatters = {};
		    return service.timesVotedChart
		}

		// service.dynamicChart = function(label, resultTally) {
		// service.dynamicChart = {};
		//     service.dynamicChart.type = "BarChart";
		//     service.timesVotedChart.data = {"cols": [
		//         {id: label, label: label, type: "string"},
		//         {id: "population", label: "Population", type: "number"}
		//     ], "rows": [
		//         {c: [
		//             {v: '0 of 3'},
		//             {v: resultTally.timesVoted['0 of 3']}
		//         ]},
		//         {c: [
		//             {v: '1 of 3'},
		//             {v: resultTally.timesVoted['1 of 3']}
		//         ]}
		//     ]};


		    //New Code
		    service.dynamicChartMaker = function(label, resultTally) {
				var propertyImport = [];
				var titleImport = [];
				for (i in resultTally) {
					propertyImport.push(resultTally[i])
					titleImport.push(i)
				};
				var orderedTitle = titleImport.sort()
				var orderedProp = []

				for (var i = 0; i < orderedTitle.length; i++) {
					for (var s = 0; s < titleImport.length; s++) {
						console.log("for loop work")
						if (orderedTitle[i] == titleImport[s]) {
							console.log("success")
							orderedProp.push(propertyImport[s])
						}
					}

				}
				console.log("CHECKING IMPORT", orderedProp);


				service.dynamicChart = {};
			    service.dynamicChart.type = "BarChart";
			    service.dynamicChart.data = {"cols": [
			        {id: label, label: label, type: "string"},
			        {id: "population", label: "Population", type: "number"}
			    ], "rows": []};

			    for (var i = 0; i < propertyImport.length; i++) {
						service.dynamicChart.data.rows[i] = {c: [
			            {v: orderedTitle[i]},
			            {v: orderedProp[i]}
			        ]};
	      			}
                

			    // New code end
			        service.dynamicChart.options = {
			        "title": label,
			        "isStacked": "true",
			        "fill": 20,
			        "displayExactValues": true,
			        "vAxis": {
			            "title": label, "gridlines": {"count": 6}
			        },
			        "hAxis": {
			            "title": "Population"
			        }
			    };

			    service.dynamicChart.formatters = {};
			    return service.dynamicChart
		}

return service;
      })