(function() {
    angular
        .module('app')
        .filter('checkedItems', checkedItems);
    
    function checkedItems() {
        return function(items, showAll) {
            var result = [];
            if (angular.isArray(items)) {
                angular.forEach(items, function(item) {
                   if (!item.done || showAll) {
                       result.push(item);
                   }
                });

                return result;

            } else {
                return items;
            }
        }
    }
})();