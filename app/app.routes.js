angular
    .module('app')
    .config(config);

function config($routeProvider, $qProvider, $locationProvider ) {
   $qProvider.errorOnUnhandledRejections(false);
   $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/jobs/index.view.html'
        })
        .when('/products/:slug', {
            templateUrl: 'app/components/products-details/show.view.html'
        })
        .when('/users/login', {
            templateUrl: 'app/components/login/login.view.html'
        })
        .when('/orders', {
            templateUrl: 'app/components/orders/index.view.html'
        });
}
