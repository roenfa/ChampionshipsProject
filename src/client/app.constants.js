const API_URL_BASE = 'localhost:7003/api/v1';

let appConstantModule = angular.module('appChampionshipConstant', []);
appConstantModule.constant('API_URL_BASE', API_URL_BASE);

export default appConstantModule;
