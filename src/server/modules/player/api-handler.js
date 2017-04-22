
import DBManager from '../../core/database';
import * as HTTP_STATUS from '../../core/utils/http-statuses';
let playerAdapter = DBManager.getAdapter('Player');
export default class ApiHandler {

	static addPlayer(req, res, next) {
        	playerAdapter.insert(req.body)
            .then((data) => {
                res.json({
                    message: 'Player was added successful.',
                    data: data
                });
            })
            .catch((err) => {
                console.log(err);
                if (err.message) {
                    console.log("error");
                    err.status = 500;
                    next(err);
                } else {
                    console.log("error2");
                    next(new Error(err));
                }   
            });
	}

    static getPlayers(req, res, next) {
        playerAdapter.findAll({})
        .then((data) => { res.json(data) })
        .catch((err) => { next(err) });
    }

    static findPlayerById(req, res, next) {
        playerAdapter.findOne({'_id': req.params.id})
        .then((data) => {
            res.json(data);        
        })
        .catch((error) => {
            error.status = HTTP_STATUS.BAD_REQUEST;
            next(error);
        });
    }
	
}