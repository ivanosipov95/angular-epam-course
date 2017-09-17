(function() {
	"use strict";

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);

	function UserTaskList($stateParams, tasksSrv) {
		var $ctrl = this;

		$ctrl.tasks = tasksSrv.getUserTasks($stateParams.userId);
	}

})();