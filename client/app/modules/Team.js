// conect with service

var moduleName='team.services';

const HTTP = new WeakMap();

class Team 
{
	constructor($http) 
	{
		HTTP.set(this, $http);
	}
}