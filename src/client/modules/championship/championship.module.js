
//import ClubController from './controllers/championship.controller';
import ClubController from './club/create/create-club.controller';
import routertConfig from './championship.routes';
let championshipModule = angular.module('championship', [

]);

championshipModule.config(routertConfig);
//championshipModule.controller('ClubController', ClubController);
championshipModule.controller('ClubController', ClubController);

export default championshipModule;