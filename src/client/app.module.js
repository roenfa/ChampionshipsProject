import AppController from './controllers/appController';
import routerConfig from './app.routes';
import championshipModule from './modules/championship/championship.module';

angular.module('appChampionship', [
	'ui.router',
	'ngMaterial',
])
	.controller('AppController', AppController)
	.config(routerConfig);