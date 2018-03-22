'use strict';

angular
    .module('app')
    .factory('JobseekerFactory', JobseekerFactory);

JobseekerFactory.$inject = ['$http', 'baseUrl'];

function JobseekerFactory($http, baseUrl) {
    return {
      create: create,
      applications: applications
    }

    function create(record) {
        return $http.post(baseUrl + "jobseekers/create", {jobseeker: record});
    }
    function applications() {
    	return $http.get(baseUrl + "jobseekers/applications");
    }
}
