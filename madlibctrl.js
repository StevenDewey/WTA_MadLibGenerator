var app = angular.module('madlibapp', []);

app.controller('madlibctrl', ['$scope', function($scope){
	// ARRAYS FOR NOUNS, ADJECTIVES, ADVERBS, VERBS
	$scope.nouns = ['MATT'];
	$scope.adjectives = ['MATT'];
	$scope.adverbs = ['MATT'];
	$scope.verbs = ['MATT'];

	// STORIES
	$scope.stories = ['Every Christmas we ' + $scope.verbs[0] + ' to a ' + $scope.adjectives[0] + ' tree farm far away.'+
		'This is not just any ' + $scope.adjectives[1] + ' tree farm. My dad and I ' + $scope.verbs[1] +
		'onto the ' + $scope.nouns[0] + ' to ' + $scope.verbs[2] + ' for the perfect ' + $scope.nouns[1] + '. '+
		'Some people like them ' + $scope.adjectives[2] + ', but I prefer them ' + $scope.adjectives[3] + '. After '+
		'searching for hours I usually ' + $scope.adverbs[0] + ' exclaim "Dad! The perfect tree is over '+
		'there!" Off we ' + $scope.verbs[3] + ' to get the tree. The problem is we always forget the'+
		$scope.nouns[2] + ' and the ' + $scope.nouns[3] + '. But at the end of the day we ' + $scope.adverbs[1] +
		'get the tree and head home ' + $scope.adverbs[2] + '. "I wish it was Christmas all year round" '+
		'I ' + $scope.adverbs[3] + ' think to myself.',

		'Today I went shopping. When I arrived at the store I saw a ' + $scope.adjectives[0] + ' ' + $scope.nouns[0] + ', who upon noticing me ' + $scope.adverbs[0] + ' said "I need to ' + $scope.verbs[0] + '". "Well,' +
		'that was ' + $scope.adjectives[1] + '" I thought to myself and walked in the store. The store had rearranged it\'s inventory, so I felt ' + $scope.adverbs[1] + ' lost. I' +
		'walked up to store clerk and said ' + $scope.adverbs[2] + ' "I am looking for a ' + $scope.adjectives[2] + ' ' + $scope.nouns[1] + ' that doesn\'t ' + $scope.verbs[1] + ' as often as the last one I had." The store clerk' +
		'looked at me with a ' + $scope.adjectives[3] + ' look in his eye and said, "What you are looking for can be found by the ' + $scope.nouns[2] + ', if you see a ' + $scope.nouns[3] + ' that ' +
		$scope.adverbs[3] + ' can ' + $scope.verbs[2] + ', then you\'ve gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it' +
		'on amazon.com, Their products seem to ' + $scope.verbs[3] + ' the perfect amount"',


		'Many say that brain storming is ' + $scope.adjectives[0] + ' and does not ' + $scope.verbs[0] + '.'+
		'However, with the combination of the right computer and ' + $scope.nouns[1] + ' anyone'+
		'can lead a good ' + $scope.verbs[1] + '. When you have ' + $scope.adverbs[0] + ' pulled together a ' + $scope.adjectives[1] +
		'group of ' + $scope.nouns[0] + ' in a big room with lots of TV\'s then '+
		'magical things will happen. In the past we have ' + $scope.adverbs[1] + ' suggested '+
		'participants work together to find the most ' + $scope.adjectives[2] + ' solution. The'+
		'most difficult part is many ' + $scope.adjectives[3] + ' ' + $scope.nouns[2] + ' like to '+
		$scope.verbs[2] + '. This has proved to be ' + $scope.adverbs[2] + ' problimatic. '+
		'But in the end the most important ' + $scope.nouns[3] + ' usually is brought to light.'+
		'Typically we try to encourage ideas to ' + $scope.verbs[3] + ', and never shut ideas '+
		'down. This concludes our instructions. Thanks for ' + $scope.adverbs[3] + ' listening!']
}]);

