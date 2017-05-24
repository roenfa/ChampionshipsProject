import ClubService from './club.service';
//import PlayersService from './player/player.rest.service.js';

let appChampionshipServices = angular.module('appChampionshipServices', []);

appChampionshipServices.service('ClubService', ClubService);
//servicesModule.service('PlayersService', PlayersService);

export default appChampionshipServices;
