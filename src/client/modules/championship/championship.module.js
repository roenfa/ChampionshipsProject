

import TeamController from './controllers/championship.controller';
import CreateTeamController from './team/create/create-team.controller';
import ClubController from './club/create/create-club.controller';
import routertConfig from './championship.routes';
let championshipModule = angular.module('championship', [

]);

championshipModule.config(routertConfig);
//championshipModule.controller('ClubController', ClubController);
championshipModule.controller('TeamController', TeamController);
championshipModule.controller('CreateTeamController', CreateTeamController);
championshipModule.controller('ClubController', ClubController);

export default championshipModule;