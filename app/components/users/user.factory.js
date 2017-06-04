'use static';

angular
    .module('app')
    .factory('UserFactory', UserFactory);

UserFactory.$inject = ['$http', 'baseUrl'];

function UserFactory($http, baseUrl) {
    return {
        create : create,
        current : current,
        findAddress: findAddress
    };

    function create(user){
        return $http.post(baseUrl + '/auth', user);
    }

    function current() {
        return $http.get(baseUrl + 'users/current');
    }

    function findAddress(zipCode) {
        return $http.get(baseUrl + 'users/address/'+zipCode);
    }
}