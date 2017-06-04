'use static';

angular
    .module('app')
    .controller('Order', Order);

Order.$injection = ['ProductFactory', 'Notification', '$location'];

function Order(ProductFactory, Notification, $location) {
    var vm = this;
    vm.init = init;

    init();

    function init() {
        vm.records = [];
        vm.selected = [];
        ProductFactory.orders()
            .success(success).error(error);
        function  success(response) {
            vm.records = response
        }

        function error(response, status) {
            if (status == 401) {
                Notification.error({title: "DESCULPE", message: "Você não tem permição para acessar essa pagina"});
                $location.path('/')

            }
        }

    }


}

