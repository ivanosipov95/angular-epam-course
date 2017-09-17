(function() {
	"use strict";

	angular.module("app", [
		"ui.router",
		// features
		"tasks",
		"users",
		"userTasks"
	]);

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});

})();