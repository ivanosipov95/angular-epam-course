(function() {

	angular
		.module("tasks")
		.component("addTask", {
			templateUrl: "tasks/add-task/add-task.html",
			controller: "AddTask"
		});
})();