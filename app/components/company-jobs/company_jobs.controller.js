'use static';

angular
    .module('app')
    .controller('CompanyJobs', CompanyJobs);

CompanyJobs.$injection = ['Factory', 'Notification', '$location'];

function CompanyJobs(CompanyFactory, Notification, $location) {
    var vm = this;
    vm.init = init;

    init();

    function init() {
        vm.records = [];
        vm.selected = [];
        CompanyFactory.jobs().then(success, error);
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
