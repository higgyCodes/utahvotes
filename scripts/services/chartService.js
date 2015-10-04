'use strict';

angular.module('utahvotesApp')
	.factory('chartService', function () {
	var service = {};
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

return service;
      })