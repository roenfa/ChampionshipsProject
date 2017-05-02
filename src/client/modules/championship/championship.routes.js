
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('team', {
			url: 'team',
			templateUrl: '/modules/championship/team/create/create-team.html',
			controller: 'TeamController',
			controllerAs: 'team',
		})
		.state('player', {
			url: 'player',
			templateUrl: '/modules/championship/player/create/create-player.html',
			controlller: 'PlayerController',
			controllerAs: 'player' 

		})
}