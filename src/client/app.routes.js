
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('main', {
			url: 'test',
			templateUrl: 'app.template.html',
			controller: 'AppController',
			ControllerAs: 'main',
		})
		.state('team', {
			url: 'team',
			templateUrl: 'championship/team/create/create-team.html',
			controller: 'TeamController',
			ControllerAs: 'team',
		})
}