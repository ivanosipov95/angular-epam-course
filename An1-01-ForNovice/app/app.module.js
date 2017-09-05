(function() {
    angular.module('app', [])
        .run(runApp);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

    function runApp(todoService, model) {
        todoService.getItems()
            .then(function(result) {
                model.items = result;
            });
    }
})();