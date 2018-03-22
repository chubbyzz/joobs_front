'use strict';

angular
    .module('app')
    .factory('JobFactory', JobFactory);

JobFactory.$inject = ['$http', 'baseUrl'];

function JobFactory($http, baseUrl) {
    return {
        search: search,
        info: info,
        find: find,
        apply: apply,
        orders: orders,
        create: create
    }
    function create(job) {
        return $http.post(baseUrl + "jobs/create", {job: job});
    }
    function search(page, filters) {
        if(filters.search == null || filters.search == "") delete filters.search;
        return $http.get(baseUrl + "jobs/" + page, {params: filters});
    }
    function info() {
        return $http.get(baseUrl + "jobs/info");
    }
    function find(slug) {
        return $http.get(baseUrl + "jobs/find/" + slug );
    }

    function apply(job) {
        return $http.post(baseUrl + 'applications/apply', {slug: job});
    }

    function orders() {
        return $http.get(baseUrl + 'orders')
    }


}
