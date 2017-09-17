(function () {
    angular.module('app')
        .service('stateRouter', stateRouter);


    function stateRouter($state) {
        this.navigate = function (toState) {
            $state.go(toState)
        }
    }
})();