export default function service() 
{
	var PATH = 'http://localhost:7002';

	var start = function() {
		console.info('Starts the Championships application!!');
	    console.log(this);
	};

    var _service = {
    	PATH: PATH,
        /*user: null,*/
        start: start
    };
}