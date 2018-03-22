'use strict';

angular
    .module('app')
    .controller('Jobseeker', Jobseeker)

Jobseeker.$inject = ['JobseekerFactory', 'Notification', '$location'];

function Jobseeker(JobseekerFactory, Notification, $location) {
    var vm = this;

    vm.jobseeker_user = {user: {name: '', email: '', password: '', password_confirmation: ''}, jobseeker: {linkedin: ''}};
    vm.create = create;

    function create() {
      JobseekerFactory.create(vm.jobseeker_user )
          .then(success, error);

        function success(response) {
          Notification.success({title: "BEM VINDO", message: 'Olá ' + response.data.name});
          $location.path('/users/login');
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
