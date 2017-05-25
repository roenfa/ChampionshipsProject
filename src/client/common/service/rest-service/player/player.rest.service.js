

export default class PlayerService {
  constructor(Restangular) {
      'ngInject';
      this.PlayerRest = Restangular.service("players");
  }

  getPlayers() {
      return this.PlayerRest.getList().$object;
  }

}
