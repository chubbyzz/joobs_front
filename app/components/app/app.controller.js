'use static';

angular
    .module('app')
    .controller('App', App);

App.$injection = ['UserFactory', 'AuthenticateService', '$window'];

function App(UserFactory, AuthenticateService, $window, $rootScope) {
    var vm = this;

    vm.openMenu = openMenu;
    vm.logout = logout;
    vm.init = init;

    $rootScope.$on('reloadAppController', init);

    vm.init();

    function init() {
        UserFactory.current().then(current);
    }

    function current(response) {
        vm.hasUser = !response.data.hasOwnProperty('error');
        vm.user = response.data;
    }

    function logout (){
        AuthenticateService.logout().success(success);

        function success() {
            $window.location = '/';
        }
    }


    function openMenu($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
}

