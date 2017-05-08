import fs from 'fs';
import path from 'path';

export default class ModelLoader {
	constructor() {
		this.pathModels = __dirname + '/model';
	}

	loadModels() {
		var index, name, models;
		console.log('load models-----------------', this.pathModels);
		try {
			models = fs.readdirSync(this.pathModels);
			console.log('models>>>>>>>>>>', models,  models.length);
			console.log(models.length);
			for(index = 0; index < models.length; index += 1) {
				name = (path.parse(models[index])).name;
				console.log('load model----->',index, name);
				console.log('load model', name);
				require(this.pathModels + '/' + name);
			}
		}
		catch(error) {
			
		}
	}
}