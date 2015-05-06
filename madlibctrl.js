var app = angular.module('madlibapp', []);

app.controller('madlibctrl', ['$scope', function($scope){

	$scope.displayStory = function(){
		for (checkbox in $scope.checkboxes){
			if($scope.checkboxes[checkbox]){
				$scope.currentStory = $scope.stories[checkbox];
			}
		}
	}

	// ARRAYS FOR NOUNS, ADJECTIVES, ADVERBS, VERBS
	$scope.nouns = ['MATT'];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];
	$scope.adjectives = ['MATT'];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];
	$scope.adverbs = ['MATT'];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];
	$scope.verbs = ['MATT'];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];

	var finalNouns = [];
	var finalAdjectives = [];
	var finalAdverbs = [];
	var finalVerbs = [];

	// grab 4 randomly from each thing.
	for(var i = 0;i<4;i++){
		var randInd = Math.floor(Math.random()*$scope.nouns.length);
		finalNouns.push($scope.nouns[randInd]);
	}
	for(var i = 0;i<4;i++){
		var randInd = Math.floor(Math.random()*$scope.adverbs.length);
		finalAdverbs.push($scope.adverbs[randInd]);
	}
	for(var i = 0;i<4;i++){
		var randInd = Math.floor(Math.random()*$scope.adjectives.length);
		finalAdjectives.push($scope.adjectives[randInd]);
	}
	for(var i = 0;i<4;i++){
		var randInd = Math.floor(Math.random()*$scope.verbs.length);
		finalVerbs.push($scope.verbs[randInd]);
	}
	// randomize each list of four
	// use those lists

	// STORIES
	$scope.stories = [{name:'Christmas', text:'Every Christmas we ' + finalVerbs[0] + ' to a ' + finalAdjectives[0] + ' tree farm far away.'+
		'This is not just any ' + finalAdjectives[1] + ' tree farm. My dad and I ' + finalVerbs[1] +
		'onto the ' + finalNouns[0] + ' to ' + finalVerbs[2] + ' for the perfect ' + finalNouns[1] + '. '+
		'Some people like them ' + finalAdjectives[2] + ', but I prefer them ' + finalAdjectives[3] + '. After '+
		'searching for hours I usually ' + finalAdverbs[0] + ' exclaim "Dad! The perfect tree is over '+
		'there!" Off we ' + finalVerbs[3] + ' to get the tree. The problem is we always forget the '+
		finalNouns[2] + ' and the ' + finalNouns[3] + '. But at the end of the day we ' + finalAdverbs[1] +
		' get the tree and head home ' + finalAdverbs[2] + '. "I wish it was Christmas all year round" '+
		'I ' + finalAdverbs[3] + ' think to myself.'},

		{name:'Shopping', text:'Today I went shopping. When I arrived at the store I saw a ' + finalAdjectives[0] + ' ' + finalNouns[0] + ', who upon noticing me ' + finalAdverbs[0] + ' said "I need to ' + finalVerbs[0] + '". "Well, ' +
		'that was ' + finalAdjectives[1] + '" I thought to myself and walked in the store. The store had rearranged it\'s inventory, so I felt ' + finalAdverbs[1] + ' lost. I ' +
		'walked up to store clerk and said ' + finalAdverbs[2] + ' "I am looking for a ' + finalAdjectives[2] + ' ' + finalNouns[1] + ' that doesn\'t ' + finalVerbs[1] + ' as often as the last one I had." The store clerk ' +
		'looked at me with a ' + finalAdjectives[3] + ' look in his eye and said, "What you are looking for can be found by the ' + finalNouns[2] + ', if you see a ' + finalNouns[3] + ' that ' +
		finalAdverbs[3] + ' can ' + finalVerbs[2] + ', then you\'ve gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it ' +
		'on amazon.com, Their products seem to ' + finalVerbs[3] + ' the perfect amount"'},


		{name:'Brainstorm', text:'Many say that brain storming is ' + finalAdjectives[0] + ' and does not ' + finalVerbs[0] + '.'+
		'However, with the combination of the right computer and ' + finalNouns[1] + ' anyone '+
		'can lead a good ' + finalVerbs[1] + '. When you have ' + finalAdverbs[0] + ' pulled together a ' + finalAdjectives[1] + ' ' +
		'group of ' + finalNouns[0] + ' in a big room with lots of TV\'s then '+
		'magical things will happen. In the past we have ' + finalAdverbs[1] + ' suggested '+
		'participants work together to find the most ' + finalAdjectives[2] + ' solution. The '+
		'most difficult part is many ' + finalAdjectives[3] + ' ' + finalNouns[2] + ' like to '+
		finalVerbs[2] + '. This has proved to be ' + finalAdverbs[2] + ' problimatic. '+
		'But in the end the most important ' + finalNouns[3] + ' usually is brought to light. '+
		'Typically we try to encourage ideas to ' + finalVerbs[3] + ', and never shut ideas '+
		'down. This concludes our instructions. Thanks for ' + finalAdverbs[3] + ' listening!'}]
}]);

