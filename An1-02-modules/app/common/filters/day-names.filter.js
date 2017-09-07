(function() {
    angular.module('commonFilters')
        .filter('dayNames', dayNames);

    function dayNames() {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return function(input) {
            return angular.isNumber(input) ? dayNames[input] : input;
        }
    }
})();