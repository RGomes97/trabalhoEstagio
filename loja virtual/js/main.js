angular.module('main', ['produtos','ngAnimate','ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/rubens', {
		templateUrl: 'index2.html'
	})
})