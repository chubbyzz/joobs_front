'use strict';

angular
    .module('app')
    .controller('Company', Company)

Company.$inject = ['CompanyFactory', 'AddressFactory', 'Notification'];

function Company(CompanyFactory, AddressFactory, Notification) {
    var vm = this;

    vm.company_user = {user: {email: '', password: '', password_confirmation: ''},company: {name: ''}, address: {zipcode: '', city_id: '', district: '', street: '', number: ''}};
    vm.create = create;
    vm.loadStates = loadStates;
    vm.loadCities = loadCities;
    vm.states = [];
    vm.cities = [];
    vm.city_disabled = true;

    vm.loadStates();

    function loadStates() {
      AddressFactory.states().then((states) => {
        vm.states = states.data;
        vm.city_disabled = false;
      });
    }

    function loadCities(state_id) {
      AddressFactory.cities(state_id).then((cities) => vm.cities = cities.data)
    }

    function create() {
      CompanyFactory.create(vm.company_user)
          .then(success, error);

        function success(response) {
          Notification.success({title: "BEM VINDO", message: 'Olá ' + response.data.name});
          $location.path('/');
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
