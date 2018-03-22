'use static';

angular
    .module('app')
    .controller('CompanyJob', CompanyJob);

CompanyJob.$injection = ['CompanyFactory', '$routeParams' ,'Notification', '$location'];

function CompanyJob(CompanyFactory, Notification, $location, $routeParams) {
    var vm = this;
    vm.init = init;

    init();

    function init() {
        vm.records = [];
        vm.selected = [];
        vm.update = update;
        vm.load = load;

        vm.load();
        function load(argument) {
            CompanyFactory.job($routeParams.slug).then(success, error);

            function success(response) {
                vm.job = response.data.name
                vm.records = response.data.array
            }
            function error(response, status) {
                if (status == 401) {
                    Notification.error({title: "DESCULPE", message: "Você não tem permição para acessar essa pagina"});
                    $location.path('/')

                }
            }
        }


        function update(id, update) {
            CompanyFactory.update_application(id, update)   
                      .then(success, error);

            function success(response) {
              Notification.success({title: "SUCESSO", message: 'Avaliado com sucesso'});
              vm.load();

            }

            function error(response) {
              var message = "";
              angular.forEach(response.data.errors, (error, index) => {
                  if (index == 0) message +=  response.data.errors[index] + '<br>';
                  else if(index != 'full_messages') message += response.data.errors[index] + '<br>';
              })
              console.log(message);
              Notification.error({title: "Ops! Algo deu errado", message: message});
            }
        }

    }


}
