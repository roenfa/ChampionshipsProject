

import ClubController from './club/create/create-club.controller';
import PlayerController from './player/player.controller';
import routertConfig from './championship.routes';
let championshipModule = angular.module('championship', [

]);
championshipModule.config(routertConfig);
championshipModule.controller('ClubController', ClubController);
championshipModule.controller('PlayerController', PlayerController);

export default championshipModule;
