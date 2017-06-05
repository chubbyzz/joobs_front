'use strict';

angular
    .module('app')
    .factory('AddressFactory', AddressFactory);

AddressFactory.$inject = ['$http', 'baseUrl'];

function AddressFactory($http, baseUrl) {
    return {
      states: states,
      cities: cities
    }

    function states() {
        return $http.get(baseUrl + "addresses/states");
    }

    function cities(state_id) {
      return $http.get(baseUrl + "addresses/state/" + state_id + "/cities");
    }
}
