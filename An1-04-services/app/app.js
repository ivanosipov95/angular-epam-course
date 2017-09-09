(function () {
    angular.module('app', [
        'services'
    ]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    })
})();