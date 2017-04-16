angular.module('main', ['produtos','ngAnimate','ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/cart', {
		templateUrl: 'cart.html'
	})
	.when('/', {
		templateUrl: 'principal.html'
	})
	.when('/details/:id', {
		templateUrl: 'details.html',
		controller: 'detailsCtrl'
	})
	.otherwise({redirectTo:'/'});
})