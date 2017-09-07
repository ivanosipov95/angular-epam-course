(function() {
    angular.module('feature')
        .controller('Tomorrow', Tomorrow);

    function Tomorrow(days) {
        var vm = this;

        vm.tomorrow = days.tomorrow;
    }
})();