(function () {

    angular.module('simpleModule')
        .controller('Simple', Simple);

    function Simple() {
        var $ctrl = this;

        $ctrl.header = 'Hello';

        $ctrl.hello = function () {
            alert("HELLO");
        }
    }
})();