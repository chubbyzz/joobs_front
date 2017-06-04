'use static';

angular
    .module('app')
    .directive('appListItem', AppListItem);

function AppListItem() {
    var directive = {
        restrict: "E",
        templateUrl: "/app/directives/list-item/listItemView.html",
        scope: {
            record : "=",
            actions : "="
        }
    }
    return directive;
}
