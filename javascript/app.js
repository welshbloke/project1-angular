angular.module('bandApp', ['ngRoute', 'bandControllers', 'bandDirectives', 'bandServices'])

.config(function($routeProvider) {
	$routeProvider
		//route for The Front Page
		.when('/theFrontPage', {
			templateUrl : 'templates/TheFrontPage.html',
			controller : 'FrontPageController'
		})
		//route for The Band Page
		.when('/theBandPage', {
			templateUrl : 'templates/TheBand.html',
			controller : 'BandController'
		})
		//route for The Members Page
		.when('/theMembersPage', {
			templateUrl : 'templates/TheMembers.html',
			controller : 'MembersController'
		})
		//route for The Music Page
		.when('/theMusicPage', {
			templateUrl : 'templates/TheMusic.html',
			controller : 'MusicController'
		})
		//route for The Social Side Page
		.when('/theSocialPage', {
			templateUrl : 'templates/TheSocialSide.html',
			controller : 'SocialSideController'
		})
		//route for The Contact Details Page
		.when('/theContactPage', {
			templateUrl : 'templates/TheContactDetails.html',
			controller : 'ContactDetailsController'
		})

		.otherwise({redirectTo: '/theFrontPage'});
});