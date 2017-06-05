'use strict';

angular
    .module('app')
    .factory('CompanyFactory', CompanyFactory);

CompanyFactory.$inject = ['$http', 'baseUrl'];

function CompanyFactory($http, baseUrl) {
    return {
      create: create
    }

    function create(user_company) {
        user_company = {user_company: user_company}
        return $http.post(baseUrl + "companies/create", user_company);
    }
}
