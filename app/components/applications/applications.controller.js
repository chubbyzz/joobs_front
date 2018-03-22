'use static';

angular
    .module('app')
    .controller('Applications', Applications);

Applications.$injection = ['JobseekerFactory', 'Notification', '$location'];

function Applications(JobseekerFactory, Notification, $location) {
    var vm = this;
    vm.init = init;

    init();

    function init() {
        vm.records = [];
        vm.selected = [];
        JobseekerFactory.applications().then(success, error);
        function success(response) {
            vm.records = response.data
            console.log(vm.records)
        }

        function error(response, status) {
            if (status == 401) {
                Notification.error({title: "DESCULPE", message: "Você não tem permição para acessar essa pagina"});
                $location.path('/')

            }
        }

    }


}
