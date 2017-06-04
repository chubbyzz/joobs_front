'use static';

angular
    .module('app')
    .controller('Login', Login);

Login.$injection = ['AuthenticateService', '$location', '$rootScope', 'Notification'];

function Login(AuthenticateService, $location, $rootScope , Notification) {
    var vm = this;

    vm.login = login;


    function login() {
        AuthenticateService.login(vm.user).then(function(response){
            $rootScope.$emit('reloadAppController');
            Notification.success({title: "BEM VINDO", message: 'Olá ' + response.data.data.name});
            $location.path('/')
        });
    }
}

