'use strict';

angular
    .module('app')
    .controller('ProductDerails', ProductDerails)

ProductDerails.$inject = ['ProductFactory', '$routeParams', 'Notification', '$location'];

function ProductDerails(ProductFactory, $routeParams, Notification, $location) {
    var vm = this;
    vm.showImage = showImage;
    vm.buy = buy;

    vm.quantity = 1;

    ProductFactory.find($routeParams.slug)
        .then(recordFound)
    function recordFound(response) {
        vm.record = response.data;
        vm.record.mainImage = vm.record.images[0].path
    }

    function showImage(image) {
        vm.record.mainImage = image.path
    }

    function buy() {
        ProductFactory
            .buy({quantity: vm.quantity, product: $routeParams.slug})
            .success(success).error(error);

        function success(response) {
            Notification.success({
                title: 'OBRIGADO POR COMPRAR',
                message: 'Recebera logo seu(sua) ' + response.product
            });
            $location.path('/orders');
        }

        function error(response, status) {
            if (status == 401) {
                Notification.error({title: 'ATENÇÂO', message: 'Você precisa estar logado para comprar'});
                $location.path('/users/login');
            }

        }
    }
}