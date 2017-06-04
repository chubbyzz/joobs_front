angular
    .module('app')
    .run(config);

function config($rootScope, Notification, $location, $http) {
    $rootScope.$on('auth:login-success', logged);

    $rootScope.$on('auth:login-error', loginError);

    function logged (ev, user) {
        Notification.success('Olá ' + user.email);
        $rootScope.$emit('setCurrentUser', user);
        //$location.path("/");
        //$http.post('http://localhost:3001/api/v1/products/buy')
    }

    function loginError (ev, messages) {
        var message = "";
        console.log(messages);
        messages.errors.forEach(function (error) {
           message +=  error;
        });
        Notification.error(message)
    }

}