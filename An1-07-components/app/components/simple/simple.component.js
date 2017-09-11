(function () {
    angular.module('simpleModule')
        .component('simple', {
            templateUrl: 'components/simple/simple.html',
            controller: 'Simple',
            controllerAs: 'ctrl'
        });
})();