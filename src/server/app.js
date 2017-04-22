import express from 'express';
import bodyParser from 'body-parser';
import DbManager from './core/database';
import Team from './modules/team';
import Player from './modules/player';
import path from 'path';
import ErrorHandler from './core/utils/error-handler';
export default class App {
	constructor(config) {
		this.appServer = express();
		this.mainRouter = {
			routerWithoutAuthentication: '',
			routerWithAuthentication: ''

		};
		this.config = config;
		this.setConfiguration(this.appServer, config.server);
	}

	setConfiguration(app, config) {
		app.set('port', config.appPort);
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());
		app.use(express.static(path.join(__dirname, config.publicPath)));

	}

	registerMainApp(app) {
		this.mainRouter.routerWithoutAuthentication = express.Router();
		this.mainRouter.routerWithAuthentication = express.Router();
		app.use('/api/v1', this.mainRouter.routerWithAuthentication);
		app.use('/api/v1', this.mainRouter.routerWithoutAuthentication);
		app.use('/*', ErrorHandler.httpError(400));
		app.use((err, req, res,next) => {
			let status = err.status || 500;
			if(status === 500) {
				console.log(err.stack);
			}
			res.status(status).json({'message': err.message});
		});	
	}

	getAppServer() {
		return this.appServer;
	}
	
	loadModules() {
		return new Promise((resolve, reject) => {
			DbManager.connect()
			.then((status) => {
				this.registerMainApp(this.appServer);
				Team.registerModule(this.mainRouter);	
				Player.registerModule(this.mainRouter);
				resolve('ok');
			})
			.catch((err) => {
				reject(err);
			})
			
		});
	}
}