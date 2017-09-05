(function() {
    angular
        .module('app')
        .directive('viTaskList', viTaskList);
    
    function viTaskList() {
        return {
            restrict: 'E',
            templateUrl: 'directives/task-list/task-list.directive.html'
        }
    }
})();