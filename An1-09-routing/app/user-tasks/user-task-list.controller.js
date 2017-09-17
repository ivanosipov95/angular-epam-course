(function() {

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);


	function UserTaskList($routeParams, $route, tasksSrv) {
		var $ctrl = this;
		$ctrl.tasks = tasksSrv.getUserTasks($routeParams.userId);

		console.log($route.current.params.userId);
	}

})();