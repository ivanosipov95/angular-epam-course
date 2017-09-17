(function() {
'use strict';

	angular.module("app", [
		"ngRoute",
		// features
		"tasks",
		"users",
		"userTasks"
	]);

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});

})();