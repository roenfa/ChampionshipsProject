

import ClubListController from './club/club-list.controller';
import routertConfig from './championship.routes';
let championshipModule = angular.module('championship', [

]);
championshipModule.config(routertConfig);
championshipModule.controller('ClubListController', ClubListController);

export default championshipModule;