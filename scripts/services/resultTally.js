'use strict';

angular.module('utahvotesApp')
  .factory('resultTally', function () {
  	var service = {};
	
	service.party = {
		'Democrats' : 0,
		'Republicans' : 0,
		'Other' : 0
	};
	service.sex = {
		'Male' : 0,
		'Female' : 0,
		'Unknown' : 0
	};
	service.race = {
		'Caucasian' : 0,
		'Hispanic' : 0,
		'Other' : 0
	};
	service.age = {
		'18 to 24' : 0,
		'25 to 34' : 0,
		'35 to 49' : 0,
		'50 to 64' : 0,
		'65 + ' : 0,
		'unknown' : 0
	};
	service.timesVoted = {
		'0 of 3' : 0,
		'1 of 3' : 0,
		'2 of 3' : 0,
		'3 of 3' : 0
	}
	
		function Graph() {
		this['0 to 9.99'] = 0,
		this['10 to 19.99'] = 0,
		this['20 to 29.99'] = 0,
		this['30 to 39.99'] = 0,
		this['40 to 49.99'] = 0,
		this['50 to 59.99'] = 0,
		this['60 to 69.99'] = 0,
		this['70 to 79.99'] = 0,
		this['80 to 89.99'] = 0,
		this['90 to 100'] = 0,
		this['unknown'] = 0,
		this['total'] = 0
	};
	service.ideology = new Graph();
	service.partisanship = new Graph();
	service.activist = new Graph();
	service.voterprop = new Graph();
	
	console.log("Constructor Working", service.ideology['0 to 9.99'])

	service.demoTally = function(imported) {
		imported.forEach(function(d){
		    partyFunc(d);
		    raceFunc(d);
		    sexFunc(d);
		    ageFunc(d);

		    console.log("Checking Party", service.age)
		});
	}

	var partyFunc = function(num) {
		if (num.Party == "D") {
		    	service.party.Democrats += 1
		    } else if (num.Party == "R") {
		    	service.party.Republicans += 1
		    } else { service.party.Other +=1};
	}

	var raceFunc = function(num) {
		if (num.Race == "Caucasian") {
		    	service.race.Caucasian += 1
		    } else if (num.Race == "Hispanic") {
		    	service.race.Hispanic += 1
		    } else {service.race.Other += 1};
	}

	var sexFunc = function(num) {
		if (num.Sex == 'M') {
		    	service.sex.Male += 1
		    } else if (num.Sex == 'F') {
		    	service.sex.Female += 1
		    } else { service.sex.Unknown += 1
		    }
	}

	var ageFunc = function(num) {
		if (num.Age < 24) {
			service.age['18 to 24'] += 1
		} else if (num.Age < 34) {
			service.age['25 to 34'] += 1
		} else if (num.Age < 49) {
			service.age['35 to 49'] += 1
		} else if (num.Age < 64) {
			service.age['50 to 64'] += 1
		} else if (num.Age > 64) {
			service.age['65 + '] += 1
		} else {service.age['unknown'] += 1}
	}



return service;
      })