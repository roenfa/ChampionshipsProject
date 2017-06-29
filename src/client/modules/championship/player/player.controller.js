/*club controller*/
export default class PlayerController
{
  constructor($scope, PlayerRest) {
    'ngInject';
    console.log('Controller Player');
    this.PlayerRest = PlayerRest;
    console.log(PlayerRest);
    var imagePath = 'img/list/60.jpeg';
    var playerList = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
    $scope.gridOptions = {
      data: playerList, //required parameter - array with data
      urlSync: false
    };

    var test = []
    this.PlayerRest.getPlayers()
    .then((data) => {
      console.log('response', data);
    })
    .catch((err) => {
        console.log("eror", err);
    });





  }
}
