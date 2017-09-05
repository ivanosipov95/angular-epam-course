(function() {
    angular
        .module('app')
        .controller('TodoController', TodoController);
    
    function TodoController(model, todoService) {
        var vm = this;

        vm.todo = model;


        vm.incompleteCount = todoService.incompleteCount;
        vm.warningLevel = todoService.warningLevel;
        vm.addNewItem = todoService.addNewItem;
    }
})();