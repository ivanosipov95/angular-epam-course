(function() {
    angular.module('feature')
        .directive('highlight', highlight);

    function highlight(dayNamesFilter) {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var value = scope.vm.tomorrow;
                var attr = attrs['highlight'];

                console.log('asd');

                if (dayNamesFilter(value) === attr) {
                    elem.css('color', 'red');
                }
            }
        }
    }
})();