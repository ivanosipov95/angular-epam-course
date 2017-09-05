(function() {

    angular
        .module('app')
        .factory('todoService', todoService);
    
    function todoService($http) {
        return {
            incompleteCount: incompleteCount,
            warningLevel: warningLevel,
            addNewItem: addNewItem,
            getItems: getItems
        };


        function incompleteCount(items) {
            var count = 0;
            
            angular.forEach(items, function(item) {
                if (!item.done) {
                    count++;
                }
            });

            return count;
        }
        
        function warningLevel(items) {
            return incompleteCount(items) < 3 ? 'label-success' : 'label-warning';
        }
        
        function addNewItem(items, newItem) {
            if(newItem && newItem.action) {
                items.push({
                    action: newItem.action,
                    done: false
                });

                newItem.action = '';
            }
        }
        
        function getItems() {
            return $http.get('/data/todo.json')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(err) {
                    console.log(err);
                })
        }
    }
})();