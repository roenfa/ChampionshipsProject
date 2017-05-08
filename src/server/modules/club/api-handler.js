/*importing the database class*/
import DBManager from '../../core/database/';
/*obtain the club adapter*/
let clubAdapter = DBManager.getAdapter('Club');

export default class ApiHandler 
{
	static addClub(req, res, next) 
	{
		clubAdapter.insert(res.body)
		.then((data) => {
			res.json({
				message: "Club was added successful",
				data: data
			});
		})
		.catch((err) => {
			if(err.message) 
			{
				err.status = HTTP_STATUS.BAD_REQUEST;
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
        debugger;
        clubAdapter.findAll({})
        .then((data) => { res.json(data) })
        .catch((err) => { next(err) });
    }
}