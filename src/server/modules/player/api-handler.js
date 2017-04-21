
import DBManager from '../../core/database';
let playerAdapter = DBManager.getAdapter('Player');
export default class ApiHandler {

	static addPlayer(req, res, next) {
			playerAdapter.insert(res.body)
            .then((data) => {
                res.json({
                    message: 'Player was added successful.',
                    data: data
                });
            })
            .catch((err) => {
                if (err.message) {
                    err.status = HTTP_STATUS.BAD_REQUEST;
                    next(err);
                } else {
                    next(new Error(err));
                }
            });
	}

    static getPlayers(req, res, next) {
        console.log("request player");
        debugger;
        playerAdapter.findAll({})
        .then((data) => { res.json(data) })
        .catch((err) => { next(err) });
    }
	
}