
export default function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider

		.state({
			name: 'hello',
    		url: '/hello',
    		templateUrl: '/controllers/test.html'
		})

}