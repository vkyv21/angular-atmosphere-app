angular.module('frontEnd',[
	'ui.router',
	'ngAnimate',
	'ui.bootstrap',
    'app.directives.iconMenu',
    'app.directives.searchPage',
    'app.features.home'
  	])


.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

$stateProvider
	//home page
	.state('home', {
		url:'/',
	 templateUrl: 'js/features/home/home.html',
	 controller: 'HomeController'
	})

	 $urlRouterProvider.otherwise("/");
}]);
