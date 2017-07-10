
//console.log('Export Service Club');
export default class ClubService {

	constructor(Restangular) {
    	'ngInject';
      	this.ClubRest = Restangular.service("clubs");
  	}

  	getClubs() {
  		console.log("get Clubssss....")
		return this.ClubRest.getList().$object;     		 
  	}
}
