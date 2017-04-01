
import TeamController from './championship.controller';
import CreateTeamController from './team/create/create-team.controller';
let championshipModule = angular.module('championship', [

]);

championshipModule.controller('TeamController', TeamController);
championshipModule.controller('CreateTeamController', CreateTeamController);