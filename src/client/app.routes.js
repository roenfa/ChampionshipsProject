
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('main', {
			url: 'test',
			templateUrl: 'app.template.html',
			controller: 'AppController',
			ControllerAs: 'main',
		})
}