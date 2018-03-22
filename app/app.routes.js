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
        .when('/jobs/new', {
            templateUrl: 'app/components/new_job/index.view.html'
        })
        .when('/company/jobs', {
            templateUrl: 'app/components/company-jobs/index.view.html'
        })
        .when('/jobseekers/applications', {
            templateUrl: 'app/components/applications/index.view.html'
        }).when('/company/job/:slug', {
            templateUrl: 'app/components/company-job/show.view.html'
        });
}
