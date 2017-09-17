(function() {

	angular
		.module("tasks")
		.component("taskList", {
			templateUrl: "tasks/task-list/task-list.html",
			controller: "TaskList",
			bindings: {
				tasks: '<'
			}
		});
})();