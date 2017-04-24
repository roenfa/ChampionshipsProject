
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('club', {
			url: 'club',
			templateUrl: '/modules/championship/club/list-club.html',
			controller: 'ClubController',
			ControllerAs: 'club',
		})
}