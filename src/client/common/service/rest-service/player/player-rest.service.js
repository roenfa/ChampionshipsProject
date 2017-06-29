

export default class PlayerService {
  constructor(Restangular) {
      'ngInject';
      console.log(Restangular);
      this.PlayerRest = Restangular.service("players");
  }

  getPlayers() {
      return this.PlayerRest.getList();
  }
}
