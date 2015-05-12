var app = angular.module('madlibapp', []);

app.controller('madlibctrl', ['$scope', function($scope){

	$scope.displayStory = function(){
		clearAll();
		stringsToArrays();
		getRandomWords();
		$scope.currentStory = getStory($scope.checkedStory.index);
	}

	function getStory(index){
		switch(index){
			case 0:
				return 'Every Christmas we ' + finalVerbs[0] + ' to a ' + finalAdjectives[0] + ' tree farm far away.'+
					'This is not just any ' + finalAdjectives[1] + ' tree farm. My dad and I ' + finalVerbs[1] +
					'onto the ' + finalNouns[0] + ' to ' + finalVerbs[2] + ' for the perfect ' + finalNouns[1] + '. '+
					'Some people like them ' + finalAdjectives[2] + ', but I prefer them ' + finalAdjectives[3] + '. After '+
					'searching for hours I usually ' + finalAdverbs[0] + ' exclaim "Dad! The perfect tree is over '+
					'there!" Off we ' + finalVerbs[3] + ' to get the tree. The problem is we always forget the '+
					finalNouns[2] + ' and the ' + finalNouns[3] + '. But at the end of the day we ' + finalAdverbs[1] +
					' get the tree and head home ' + finalAdverbs[2] + '. "I wish it was Christmas all year round" '+
					'I ' + finalAdverbs[3] + ' think to myself.';
			case 1:
				return 'Today I went shopping. When I arrived at the store I saw a ' + finalAdjectives[0] + ' ' + finalNouns[0] + ', who upon noticing me ' + finalAdverbs[0] + ' said "I need to ' + finalVerbs[0] + '". "Well, ' +
					'that was ' + finalAdjectives[1] + '" I thought to myself and walked in the store. The store had rearranged it\'s inventory, so I felt ' + finalAdverbs[1] + ' lost. I ' +
					'walked up to store clerk and said ' + finalAdverbs[2] + ' "I am looking for a ' + finalAdjectives[2] + ' ' + finalNouns[1] + ' that doesn\'t ' + finalVerbs[1] + ' as often as the last one I had." The store clerk ' +
					'looked at me with a ' + finalAdjectives[3] + ' look in his eye and said, "What you are looking for can be found by the ' + finalNouns[2] + ', if you see a ' + finalNouns[3] + ' that ' +
					finalAdverbs[3] + ' can ' + finalVerbs[2] + ', then you\'ve gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it ' +
					'on amazon.com, Their products seem to ' + finalVerbs[3] + ' the perfect amount"';
			case 2:
				return 'Many say that brain storming is ' + finalAdjectives[0] + ' and does not ' + finalVerbs[0] + '.'+
					'However, with the combination of the right computer and ' + finalNouns[1] + ' anyone '+
					'can lead a good ' + finalVerbs[1] + '. When you have ' + finalAdverbs[0] + ' pulled together a ' + finalAdjectives[1] + ' ' +
					'group of ' + finalNouns[0] + ' in a big room with lots of TV\'s then '+
					'magical things will happen. In the past we have ' + finalAdverbs[1] + ' suggested '+
					'participants work together to find the most ' + finalAdjectives[2] + ' solution. The '+
					'most difficult part is many ' + finalAdjectives[3] + ' ' + finalNouns[2] + ' like to '+
					finalVerbs[2] + '. This has proved to be ' + finalAdverbs[2] + ' problimatic. '+
					'But in the end the most important ' + finalNouns[3] + ' usually is brought to light. '+
					'Typically we try to encourage ideas to ' + finalVerbs[3] + ', and never shut ideas '+
					'down. This concludes our instructions. Thanks for ' + finalAdverbs[3] + ' listening!';
		}
	}

	function stringsToArrays(){
		nouns = $scope.nouns.split(',');
		adjectives = $scope.adjectives.split(',');
		adverbs = $scope.adverbs.split(',');
		verbs = $scope.verbs.split(',');
	}

	// ARRAYS FOR NOUNS, ADJECTIVES, ADVERBS, VERBS
	// $scope.nouns = [];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];
	// $scope.adjectives = [];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];
	// $scope.adverbs = [];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];
	// $scope.verbs = [];//,'STEVEN','JOHN','ERIC','SARAH','ZACK'];
	$scope.checkedStory={};

	var nouns = [];
	var adjectives = [];
	var adverbs = [];
	var verbs = [];
	var finalNouns = [];
	var finalAdjectives = [];
	var finalAdverbs = [];
	var finalVerbs = [];

	function clearAll(){
		nouns = [];
		adjectives = [];
		adverbs = [];
		verbs = [];
		finalNouns = [];
		finalAdjectives = [];
		finalAdverbs = [];
		finalVerbs = [];

	}

	// grab 4 randomly from each thing.
	function getRandomWords(){
		while(finalNouns.length !== 4){
			var randInd = Math.floor(Math.random()*nouns.length);
			var word = nouns[randInd].trim();
			if(finalNouns.indexOf(word) == -1){
				finalNouns.push(word);
			}
		}
		while(finalAdverbs.length !== 4){
			var randInd = Math.floor(Math.random()*adverbs.length);
			var word = adverbs[randInd].trim();
			if(finalAdverbs.indexOf(word) == -1){
				finalAdverbs.push(word);
			}
		}
		while(finalAdjectives.length !== 4){
			var randInd = Math.floor(Math.random()*adjectives.length);
			var word = adjectives[randInd].trim();
			if(finalAdjectives.indexOf(word) == -1){
				finalAdjectives.push(word);
			}
		}
		while(finalVerbs.length !== 4){
			var randInd = Math.floor(Math.random()*verbs.length);
			var word = verbs[randInd].trim();
			if(finalVerbs.indexOf(word) == -1){
				finalVerbs.push(word);
			}
		}
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
		'down. This concludes our instructions. Thanks for ' + finalAdverbs[3] + ' listening!'}
	]
}]);

