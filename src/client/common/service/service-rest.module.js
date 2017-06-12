
import PlayerRestService from './rest-service/player/player-rest.service';
import ClubRestService from './rest-service/club/club-rest.service';
let moduleRestService = angular.module('Common.Services.RestService', []);
moduleRestService.service('PlayerRest', PlayerRestService);
moduleRestService.service('Club', ClubRestService);

export default moduleRestService;
