/* this is the model file for Team module*/
const app = angular.module("championshipApp", ["ngRoute"]);

app.config($routeProvider => {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/team", {
        templateUrl : "team.htm"
    })
    .when("/championship", {
        templateUrl : "championship.htm"
    });
});

	