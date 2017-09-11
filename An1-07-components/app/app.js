(function() {
	"use strict";

	angular
		.module("app", ['simpleModule', 'accordionModule']);
	
	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});
})();
