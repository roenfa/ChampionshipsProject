import ApiHandler from './api-handler';

export default class Api {

	static registerModule(apiMain) {
		let apiProtected = apiMain.routerWithoutAuthentication;
		apiProtected.route('/clubs')
		.post(ApiHandler.addClub)
		.get(ApiHandler.getClubs);

		apiProtected.route('/clubs/:id')
		.get(ApiHandler.findClubById)
		.put(ApiHandler.updateClub)
		.delete(ApiHandler.deleteClub);
	} 
}