export default class ClubListController
{
	constructor($scope, $mdDialog, clubResources, ClubRest) {
		console.log("ClubResources: " + clubResources);
		$scope.clubResources = clubResources;
	}	

	static get $inject() {
		return ['$scope', '$mdDialog', 'ClubRest']
	}
}