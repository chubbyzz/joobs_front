'use static';

angular
    .module('app')
    .controller('NewJob', NewJob);

NewJob.$injection = ['JobFactory', 'Notification', '$location'];

function NewJob(JobFactory, Notification, $location) {
    var vm = this;
    vm.init = init;

    init();

    function init() {
        vm.records = [];
        vm.selected = [];
        vm.record = {
            name: null,
            small_description: null,
            start_salary: null,
            until_salary: null
        }

        vm.create = create;

        function create() {
          JobFactory.create(vm.record)
              .then(success, error);

            function success(response) {
              Notification.success({title: "SUCESSO", message: 'Vaga criada com sucesso.'});
              $location.path('/company/jobs');
            }

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


}

