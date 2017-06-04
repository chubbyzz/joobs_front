'use strict';

angular
    .module('app')
    .controller('Company', Company)

Company.$inject = ['CompanyFactory', 'Notification'];

function Company(CompanyFactory, Notification) {
    var vm = this;

    vm.company_user = {}
    vm.create = create;

    function create() {
      CompanyFactory.create(vm.company_user)
        .success(success).error(error);

        function success(response) {
          if (response.success) {
            Notification.success({title: response.title, message: response.message});
            $location.path('/');
          }
        }

        function error(response) {
          var message = "";
          for (index in response.errors) {
              if (index == 0) {
                  message +=  response.errors[index] + '<br>';
              } else if(index != 'full_messages') {
                  message +=  index + " " + response.errors[index] + '<br>';
              }
          }
          Notification.error({title: "ERROR", message: message})
        }
    }
}
