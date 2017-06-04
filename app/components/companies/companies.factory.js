'use strict';

angular
    .module('app')
    .factory('CompanyFactory', CompanyFactory);

CompanyFactory.$inject = ['$http', 'baseUrl'];

function CompanyFactory($http, baseUrl) {
    return {
      create: create
    }

    function create(company_user) {
        return $http.post(baseUrl + "companies/create", company_user);
    }
}
