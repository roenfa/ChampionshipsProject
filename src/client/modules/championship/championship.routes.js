
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('team', {
			url: 'team',
			templateUrl: '/modules/championship/team/create/create-team.html',
			controller: 'TeamController',
			ControllerAs: 'team',
		})
}