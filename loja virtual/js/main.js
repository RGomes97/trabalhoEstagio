angular.module('main', ['produtos','ngAnimate','ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/rubens', {
		templateUrl: 'index2.html'
	})
	.when('/', {
		templateUrl: 'principal.html'
	})
	.when('/details', {
		templateUrl: 'details.html'
	})
})