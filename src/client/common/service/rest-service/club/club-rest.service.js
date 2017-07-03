
//console.log('Export Service Club');
export default class ClubService {

	constructor(Restangular) {
    	'ngInject';
      	console.log(Restangular);
      	this.ClubRest = Restangular.service("clubs");
  	}

  	getClubs() {
		this.ClubRest.getList().$object;     		 
  	}
}
