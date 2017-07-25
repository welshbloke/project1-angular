angular.module('bandControllers', [])
	.controller('FrontPageController', function($scope) {

	})

	.controller('BandController', function($scope) {

	})

	.controller('MembersController', function($scope) {

	})

	.controller('MusicController', function($scope) {

	})

	.controller('SocialSideController', function($scope) {

	})

	.controller('ContactDetailsController', function($scope) {
		$scope.client = {
			newsletter: true,
			gigs: true
		}
		$scope.submit = function() {
			$scope.wasSubmitted = true;	
		}
	})

	.controller('iTunesController', function($scope, iTunesService) {
		$scope.results = [];
		$scope.query_change = function query_change(){

			iTunesService.callItunes($scope.query)
			.then(function(result){
				$scope.results = result.results;
			}).catch(
				function(error) {
				console.log('error', error)
			});
		};

	});