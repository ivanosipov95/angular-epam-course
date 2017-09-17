(function() {

	angular
		.module("tasks")
		.controller("AddTask", AddTask);


	function AddTask(tasksSrv, usersSrv, stateRouter) {
		let $ctrl = this;

		$ctrl.navigate = stateRouter.navigate;
		init();

		function init() {
			$ctrl.addNewTask = addNewTask;
			usersSrv.getData()
				.then((users) => { $ctrl.users = users });
		}

		function addNewTask(taskToAdd) {
            tasksSrv.add(taskToAdd);
			taskToAdd.action = "";
			taskToAdd.user = "";
		}

	}

})();