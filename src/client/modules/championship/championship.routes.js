
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('player', {
			url: 'player',
			templateUrl: '/modules/championship/player/player.html',
			controller: 'PlayerController',
			controllerAs: 'playerCtrl'
		})
		.state('club', {
			url: 'club',
			templateUrl: '/modules/championship/club/list-club.html',
			controller: 'ClubController',
			ControllerAs: 'club',
		})
}
