
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('player', {
			url: 'player',
			templateUrl: '/modules/championship/player/create/create-player.html',
			controlller: 'PlayerController',
			controllerAs: 'player' 
		})
		.state('clubs', {
			url: 'clubs',
			templateUrl: '/modules/championship/club/club-list.html',
			resolve:{
                clubResources: ['ClubRest', function(ClubRest) {
                    return ClubRest.getClubs();
                }]
            },
			controller: 'ClubListController',
			ControllerAs: 'clubList',
		})
}