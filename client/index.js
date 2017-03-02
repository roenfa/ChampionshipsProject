/* this is the model file for Team module*/
import angular;
import navbar from '/components/navbar/navbarModule';

export const championshipApp = angular.module("championshipApp", [
	"ngRoute",
	navbar
]);

championshipApp.config($routeProvider => {
    $routeProvider
    .when('/public', {
        templateUrl : '/components/navbar/navbar.html',
        controller: '/components/navbar/navbarController'
    });
    /*.when("/team", {
        templateUrl : "team.htm"
    })
    .when("/championship", {
        templateUrl : "championship.htm"
    });*/
});

	