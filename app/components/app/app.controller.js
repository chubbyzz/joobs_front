'use static';

angular
    .module('app')
    .controller('App', App);

App.$injection = ['UserFactory', 'AuthenticateService', '$window', '$location', 'Notification'];

function App(UserFactory, AuthenticateService, $window, $rootScope, $location, Notification) {
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
        AuthenticateService.logout().then(function (response) {
            $location.path('/');
            Notification.success({title: "ATÉ A PROXIMA", message: 'Volte logo'});
        });
    }


    function openMenu($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
}

