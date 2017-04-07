
import TeamController from './championship.controller';
import CreateTeamController from './team/create/create-team.controller';
import routertConfig from './championship.routes';
let championshipModule = angular.module('championship', [

]);

championshipModule.config(routertConfig);
championshipModule.controller('TeamController', TeamController);
championshipModule.controller('CreateTeamController', CreateTeamController);

export default championshipModule;