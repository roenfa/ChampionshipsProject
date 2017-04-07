import AppController from './controllers/app.controller';
import routerConfig from './app.routes';
import championshipModule from './modules/championship/championship.module';
import thirdPartyModules from './third-party.module';

angular.module('appChampionship', [
	thirdPartyModules.name,
	championshipModule.name
])
	.controller('AppController', AppController)
	.config(routerConfig)
	.config(['$qProvider', ($qProvider) => {
     $qProvider.errorOnUnhandledRejections(false);
 }]);