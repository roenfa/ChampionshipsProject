//import ClubService from './club.service';
//import PlayersService from './player/player.rest.service.js';
import PlayerRestService from './rest-services/player/player.rest.service';
let moduleRestService = angular.module('Common.Services.RestService', []);
moduleRestService.factory('PlayerRest', PlayerRestService);

//appChampionshipServices.service('', ClubService);
//servicesModule.service('PlayersService', PlayersService);

export default moduleRestService;
