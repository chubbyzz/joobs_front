'use static';
var xxxx;
angular
    .module('app')
    .controller('User', User);

User.$injection = ['UserFactory', 'Notification', '$location'];

function User(UserFactory, Notification, $location) {
    var vm = this;

    vm.register = register;
    vm.findAddress = findAddress;
    vm.addressFilled = false;

    function register(user) {
        UserFactory.create(user)
            .success(success)
            .error(error);

        function success(response) {
            Notification.success({title: "BEM VINDO", message: 'Olá ' + response.data.name});
            $location.path('/');
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

    function findAddress() {
        UserFactory.findAddress(vm.new.zip_code).success(function(response){
            if(response.hasOwnProperty('address')) {
                vm.new.address = response.address;
                vm.new.city = response.city;
                vm.new.neighborhood = response.neighborhood;
                vm.new.state = response.state;
                vm.new.address = response.address;
                vm.new.address = response.address;
            }
        });
    }
}
