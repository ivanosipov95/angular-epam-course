(function() {
	"use strict";

	angular
		.module("constants", [])
		.constant("constants", {
			APP_VERSION: "0.0.1"
		})
		.constant('mongoLab', {
			apiKey: 'tQlMjykykZlGpy21Kybuo4lehBL0PDBH',
			databaseName: 'task-manager'
		});

})();