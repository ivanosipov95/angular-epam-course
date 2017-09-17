(function() {

	angular
		.module("tasks")
		.controller("TaskList", TaskList);

	// TaskList.$inject = ["tasksSrv"];

	function TaskList($route, tasksSrv, data) {
		var $ctrl = this;
		
		// $ctrl.tasks = tasksSrv.getAllTasks();

		// $ctrl.tasks = data;
		$ctrl.tasks = $route.current.locals.data;

		$ctrl.refreshTaskList = function () {
			console.log("ROUTE RELOAD");
			$route.reload();
        }
	}

})();
