'use static';

angular
    .module('app')
    .directive('loginBox', LoginBox);

function LoginBox() {
    var directive = {
        restrict: "E",
        templateUrl: "/app/directives/login/login.box.html",
        scope: {
            has: "=",
            user: "=",
        },
        transclude: true,
    }
    return directive;
}