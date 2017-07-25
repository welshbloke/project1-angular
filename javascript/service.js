angular.module('bandServices', [])
.factory('iTunesService',function($http, $q) {

	var service = {};
	var baseUrl = 'https://itunes.apple.com/search?term=';
	var artist = 'the+monkees';

	var makeUrl = function(song) {
		var song = song.split(' ').join('+');
		var finalUrl = baseUrl + '+' + artist + '+' + song + '&callback=JSON_CALLBACK'
		return finalUrl;
	}

	service.callItunes = function(song){
		var url = makeUrl(song);
		var deferred = $q.defer();
		$http({
			method: 'JSONP',	
			url: url
		}).success(function(result){
			deferred.resolve(result);
		}).error(function(){
			deferred.reject("There was an error")
		})
		return deferred.promise;
		};
	return service;
});