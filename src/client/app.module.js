import AppController from './controllers/app.controller';
import routerConfig from './app.routes';
import championshipModule from './modules/championship/championship.module';
import thirdPartyModules from './third-party.module';
import ServiceRest from './common/service/service-rest.module';
import config from './app.config';
import constantModule from './app.constants';

let appModule = angular.module('appChampionship', [
	thirdPartyModules.name,
	championshipModule.name,
	constantModule.name,
	'Common.Services.RestService'
]);

appModule.controller('AppController', AppController)
	.config(routerConfig)
	.config(config)
	.config(['$qProvider', ($qProvider) => {
     $qProvider.errorOnUnhandledRejections(false);
 	}]);
