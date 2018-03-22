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
            var type = response.data.data.profile_type;
            if(type == "Company") $location.path('/company/jobs');
            else if (type == "Jobseeker") $location.path('/');
            
        }, error);
        function error(response) {
            var message = "";
            angular.forEach(response.data.errors, (error, index) => {
                if (index == 0) message +=  response.data.errors[index] + '<br>';
                else if(index != 'full_messages') message += response.data.errors[index] + '<br>';
            })
            Notification.error({title: "Ops! Algo deu errado", message: message});
        }
    }
}

