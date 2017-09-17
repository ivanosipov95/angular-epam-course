(function() {

	angular
		.module("users")
		.factory("usersSrv", usersSrv);

	usersSrv.$inject = ["$http", "$q"];

	function usersSrv($http, $q) {
		return {
			getData
		};

		function getData() {
			return $http
				.get("./data/users.json")
				.then(function(response) {
					return response.data;
				})
				.catch(function(response) {
					$q.reject(`Error: can not retrive data ${response.status}`)
				});
		}
	}
	
})();