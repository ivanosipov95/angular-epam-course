(function () {

    angular
        .module("tasks")
        .controller("TaskList", TaskList);


    function TaskList($state, tasksSrv, stateRouter) {
        let $ctrl = this;

        init();

        function init() {
            $ctrl.navigate = stateRouter.navigate;
            $ctrl.refreshTaskList = refreshTaskList;
            // $ctrl.tasks = tasksSrv.getAllTasks();
        }

        function refreshTaskList() {
            $state.reload();
            console.log("state is reloaded");
        }
    }

})();