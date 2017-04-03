/*
Main Controller
*/

export default class AppController 
{
	constructor($scope, $state) 
	{
		console.log('test');
		this.state = $state;
	}

	 /**
     * Manages menu content click events
     * @param {String} clickEvent event's name
     */
    announceClick(clickEvent) {
        if (clickEvent == 'profile') {
            this.state.go('main.profile');
        } else if (clickEvent == 'logout') {
            this.logout();
        }
    }

    /**
     *
     * Changes routes
     * @param {String} clickEvent event's name
     */
    changeRoute(clickEvent) {
        if (clickEvent == 'users') {
            this.state.go('main.users');
        } else if (clickEvent == 'assets') {
            this.state.go('main.assets');
        } else if (clickEvent == 'agents') {
            this.state.go('main.agents', {}, {reload: true});
        } else if (clickEvent == 'playlist') {
            this.state.go('main.playlist');
        }
    }

    /**
     * Removes stored session
     */
    logout() {
        var login = this.Login.closeSession();
        login.$promise
        .then((response) => {
            this.AppService.closeSession();
            this.state.go('login');
        })
        .catch((error) => {
            this.mdToast.simple()
            .textContent(this.translate.instant('serverResponses.' + error.data.message))
            .position('top right')
            .hideDelay(3000);
        });
    }
}