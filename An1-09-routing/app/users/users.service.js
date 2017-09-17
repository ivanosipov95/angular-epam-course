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
				.then(onSuccess)
				.catch(onError);

			function onSuccess(response) {
				return response.data;
			}

			function onError(response) {
				return $q.reject(response.data);
			}

		}
	}

})();
