(function() {

	angular
		.module("tasks")
		.controller("AddTask", AddTask);

	// AddTask.$inject = ["usersSrv", "tasksSrv"];
	
	function AddTask($location, usersSrv) {
		var $ctrl = this;

		usersSrv.getData().then(function(data) {
			$ctrl.users = data;
		});


		$ctrl.go = function (path) {
			$location.path(path);
        }
	}

})();