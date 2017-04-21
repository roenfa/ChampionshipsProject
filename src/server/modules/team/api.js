

export default class Api {

	static registerModule(apiMain) {
		let apiProtected = apiMain.routerWithoutAuthentication;
		apiProtected.route('/team')
		.get((req, res) => {
			res.send('team');
		});

		apiProtected.route('/test')
		.get((req, res) => {
			res.send('test');
		});

		apiProtected.route('/test2')
		.get((req, res) => {
			res.send('test2');
		});


	} 

}