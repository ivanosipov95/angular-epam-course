(function() {

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["usersSrv"];

	function UserList(usersSrv) {
		var $ctrl = this;

		usersSrv.getData().then(function(data) {
			$ctrl.users = data;
		});
	}

})();