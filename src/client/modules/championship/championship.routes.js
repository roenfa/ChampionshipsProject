
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('player', {
			url: 'player',
			templateUrl: '/modules/championship/player/create/create-player.html',
			controlller: 'PlayerController',
			controllerAs: 'player' 
		})
		.state('club', {
			url: 'club',
			templateUrl: '/modules/championship/club/list-club.html',
			controller: 'ClubController',
			ControllerAs: 'club',
		})
}