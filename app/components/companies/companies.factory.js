'use strict';

angular
    .module('app')
    .factory('CompanyFactory', CompanyFactory);

CompanyFactory.$inject = ['$http', 'baseUrl'];

function CompanyFactory($http, baseUrl) {
    return {
      create: create,
      jobs: jobs,
      job: job,
      update_application: update_application,
    }

    function create(user_company) {
        user_company = {user_company: user_company}
        return $http.post(baseUrl + "companies/create", user_company);
    }

    function jobs() {
        return $http.get(baseUrl + "company/jobs");
    }
    function job(slug) {
        return $http.get(baseUrl + "company/job/" + slug);
    }
    function update_application(id, action) {
    	return $http.post(baseUrl + "applications/update/" + id + "/" + action);
    }
}
