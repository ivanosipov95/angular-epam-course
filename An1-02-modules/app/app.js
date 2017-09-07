(function() {
    angular.module('app', [
        'feature',
        'common'
    ])
        .config(configApp)
        .run(runApp);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

    function configApp() {
        console.log('Config App');
    }

    function runApp() {
        console.log('Run App');
    }
})();