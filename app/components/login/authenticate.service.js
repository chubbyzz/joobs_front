angular
    .module('app')
    .service('AuthenticateService', AuthenticateService);

AuthenticateService.$inject = ['$http', 'baseUrl'];

function AuthenticateService($http, baseUrl) {
    baseUrl = baseUrl + 'auth/'
    return {
        login: login,
        logout: logout
    };

    function login(user) {
        return $http.post(baseUrl + 'sign_in', user);
    }

    function logout() {
        return $http.delete(baseUrl + 'sign_out');
    }
}