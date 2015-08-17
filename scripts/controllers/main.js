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
		    	

			});
		    console.log(vanimport)
			console.log(party)
	});
});