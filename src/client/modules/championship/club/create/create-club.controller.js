/*club controller*/
export default class ClubController
{
	constructor($scope, $mdDialog, PlayerRest) {
		this.ClubService = PlayerRest;
		console.log('Controller Club', PlayerRest);
		$scope.club =
		{
			name: "",
			nationalidad: "",
			logo: ""
		}

		/*editar....*/
  		$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Introduce un nombre para tu Club. El nombre del club puede tener entre 5 a 15 caracteres')
      .textContent('Club name.')
      .placeholder('Club name')
      .ariaLabel('Club name')
      .initialValue('')
      .targetEvent(ev)
      .ok('Create')
      .cancel('Cancel');

    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };
	}

	static get $inject() {
		return ['$scope', '$mdDialog', 'PlayerRest']
	}
}
