angular
    .module('app')
    .config(config);

function config ($mdIconProvider, $mdThemingProvider, $authProvider, baseUrl, NotificationProvider) {
    $authProvider.configure({
        apiUrl: baseUrl
    });
    $mdIconProvider
        .defaultIconSet('/assets/css/mdi.svg');
    $mdThemingProvider
        .theme('default')
        .primaryPalette('purple')
        .accentPalette('blue');
    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
}
