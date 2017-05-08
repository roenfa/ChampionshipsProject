import ClubService from './club.service';

let servicesModule = angular.module('appChampionship.services', []);

servicesModule.service('ClubService', ClubService);
console.log('initialize servicesModule');
export default servicesModule;