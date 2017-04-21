import ApiHandler from './api-handler';

export default class Api {

	static registerModule(apiMain) {
		let apiProtected = apiMain.routerWithoutAuthentication;		
		apiProtected.route('/player')
		.get(ApiHandler.getPlayers);
	}
}