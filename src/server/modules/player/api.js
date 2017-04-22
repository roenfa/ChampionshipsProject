import ApiHandler from './api-handler';

export default class Api {

	static registerModule(apiMain) {
		let apiProtected = apiMain.routerWithoutAuthentication;		
		apiProtected.route('/players')
		.post(ApiHandler.addPlayer)
		.get(ApiHandler.getPlayers);

		apiProtected.route('/players/:id')
		.get(ApiHandler.findPlayerById);
	}


}