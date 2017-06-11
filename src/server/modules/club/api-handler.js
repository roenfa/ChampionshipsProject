/*importing the database class*/
import DBManager from '../../core/database/';
/*obtain the club adapter*/
let clubAdapter = DBManager.getAdapter('Club');

export default class ApiHandler 
{
	static addClub(req, res, next) 
	{
		clubAdapter.insert(req.body)
		.then((data) => {
			res.json({
				message: "Club was added successful",
				data: data
			});
		})
		.catch((err) => {
			if(err.message) 
			{
				console.log("error");
                err.status = 500;
                next(err);
			}
			else 
			{
				next(new Error(err));
			}
		});
	}

	static getClubs(req, res, next) {
        console.log("request all clubs registered...");
        clubAdapter.findAll({})
        .then((data) => { res.json(data) })
        .catch((err) => { next(err) });
    }

    static findClubById(req, res, next) {
        clubAdapter.findOne({'_id': req.params.id})
        .then((data) => {
            res.json(data);        
        })
        .catch((error) => {
            error.status = HTTP_STATUS.BAD_REQUEST;
            next(error);
        });
    }
	
    static updateClub(req, res, next) {
        clubAdapter.update(req.params.id, req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next(err);
        });
    }

    static deleteClub(req, res, next) {
        clubAdapter.remove({_id: req.params.id})
        .then((data) => {
            res.json({
                message: 'The club was removed sucessfully.',
                data: data
            })
        })
        .catch((err) => {
            next(err);
        });
    }
}