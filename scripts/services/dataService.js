'use strict';

angular.module('utahvotesApp')
  .factory('dataService', function (resultTally) {
  	var service = {};

	service.testrun = function() {
		console.log(resultTally)
	}
	//Modifies names so that it's easily read
	//Can add to this if there is additional variances
	service.nameModifications = function(vanimport) {
		for (var i = 0; i < vanimport.length; i++) {
					var modifications = vanimport[i]
				    modifications["Activist"] = modifications["2012:Catalist:GenAct"];
				    modifications["Partisanship"] = modifications["2012:PartisanshipScr"];
				    modifications["VoterProp"] = modifications["2013:Cat:VotePropv2"];
				    if (modifications["RaceName "]) {
				    	modifications["Race"] = modifications["RaceName "]	
				    } else {modifications["Race"] = modifications["RaceName"]}
				    delete modifications["2012:Catalist:GenAct"];
				    delete modifications["2012:PartisanshipScr"];
				    delete modifications["2013:Cat:VotePropv2"]
				return vanimport
				};
		};

	//Changes Strings to data
	service.stringToData = function(vanimport) {
		vanimport.forEach(function(d){
			   	d.Age = +d.Age
			    d.Ideology = +d.Ideology
			    d.Activist = +d.Activist
			    d.Partisanship = +d.Partisanship
			    d.VoterProp = +d.VoterProp
			});
		return vanimport
	}


	


return service;
      })