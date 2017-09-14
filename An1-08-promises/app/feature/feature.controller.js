(function() {
	"use strict";

	angular
		.module("feature")
		.controller("Feature", Feature);

	function Feature($q, tasksDataService) {
		var $ctrl = this;

		console.log('from ctrl');
		// tasksDataService.getTasks()
		// 	.then(getTasksSuccess, getTaskError, getTasksNotification);

		// tasksDataService.getTasksNew()
		// 	.then(getTasksSuccess)
		// 	.then(v => {
		// 		console.log('v');
		// 		console.log(v);
		// 	})
		// 	.catch(getTaskError)
		// 	.finally(getTaskComplete);
        //
		// tasksDataService.getUsers()
		// 	.then((users) => $ctrl.users = users);

		// var ss = [];
        //
		// tasksDataService.getTasksNew()
		// 	.then(tasks => {
		// 		ss.push(tasks);
		// 		return tasksDataService.getUsers();
		// 	})
		// 	.then(users => {
		// 		ss.push(users);
        //
		// 		console.log('ss');
		// 		console.log(ss);
		// 	});


		// $q.all([tasksDataService.getTasksNew(), tasksDataService.getUsers(), $q.when(40)])
		// 	.then(data => {
		// 		console.log('data');
		// 		console.log(data);
        //
		// 		$ctrl.tasks = data[0];
		// 		$ctrl.users = data[1];
        //
		// 		console.log(data[2]);
		// 	});

		$q.when(tasksDataService.getTasksNew())
			.then(tasks => console.log(tasks));


		function getTasksSuccess(tasks) {
			$ctrl.tasks = tasks;
			console.log('As');

			return 'sss';
        }

        function getTaskError(reason) {
			console.log(reason);
        }

        function getTasksNotification(msg) {
			console.log(msg);
        }

        function getTaskComplete() {
			console.log("Promise is completed");
        }
		
	}
	
})();
