
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('club', {
			url: 'club',
			templateUrl: '/modules/championship/club/create/create-club.html',
			controller: 'ClubController',
			ControllerAs: 'club',
		})
}