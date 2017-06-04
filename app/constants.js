'use static';

angular
    .module('app')
    .constant('baseUrl', 'http://localhost:4000/api/v1/')
    .constant('tokenType', 'Bearer');
