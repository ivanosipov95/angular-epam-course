(function() {
	"use strict";

	angular.module("app", ["feature"]);

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});
	
})();
