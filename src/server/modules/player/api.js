import ApiHandler from './api-handler';

export default class ApiPlayer {

	static regiterModule(apiMain) {
		apiProtected = apiMain;
		apiProtected.route('/player')
		.post(ApiHandler.addPlayer);
	}
}