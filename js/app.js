var myApp = angular.module('myApp', ['ui.router', 'ngStorage']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/home/");
	$stateProvider
	.state('home',{
		url: "/home/",
		views: {
			"header": {templateUrl: "templates/header.html"},
			"app": {
				templateUrl: "templates/home.html",
			}
		}
	})
	.state('create',{
		url: "/home/create",
		views: {
			"header" :{templateUrl: "templates/header.html"},
			"app":{
						templateUrl: "templates/create.html",
		      			controller: "CreateCtrl"
		      	}
			}
	})
	.state('update',{
		url: "/home/update",
		views: {
			"header" : {templateUrl: "templates/header.html"},
			"app": {
				templateUrl: "templates/update.html",
				controller: "UpdateCtrl"
			}
		}
	});

});