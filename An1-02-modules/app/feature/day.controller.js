(function() {
    angular.module('feature')
        .controller('Day', Day);
    
    function Day(days) {
        var vm = this;

        vm.day = days.today;
    }
})();