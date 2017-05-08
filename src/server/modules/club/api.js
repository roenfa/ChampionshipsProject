import ApiHandler from './api-handler';

export default class Api {

	static registerModule(apiMain) {
		let apiProtected = apiMain.routerWithoutAuthentication;
		apiProtected.route('/club')
		.get(ApiHandler.getClubs);

		/*apiProtected.route('/test')
		.get((req, res) => {
			res.send('test');
		});

		apiProtected.route('/test2')
		.get((req, res) => {
			res.send('test2');
		});*/
	} 
}