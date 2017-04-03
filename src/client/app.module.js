import AppController from './controllers/appController';
import routerConfig from './app.routes';

angular.module('Champions', [
	'ui.router'
])
.controller('AppController', AppController)
.config(routerConfig);