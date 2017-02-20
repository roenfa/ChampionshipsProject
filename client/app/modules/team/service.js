// Team service

const HTTP = new WeakMap();

export default class TeamService 
{
	constructor($http) 
	{
		HTTP.set(this, $http);
	}

	getTeams() 
	{

	}
}

TeamService.$inject = ['$http'];
