angular.module('bandDirectives', [])

.directive('bandNav', function() {
	return {
		'restrict': 'E',
		'scope': true,
		'templateUrl': 'templates/directives/bandNav.html'
	}
})