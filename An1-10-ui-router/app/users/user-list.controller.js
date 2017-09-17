(function () {

    angular
        .module("users")
        .controller("UserList", UserList);


    function UserList(usersSrv, stateRouter) {
        let $ctrl = this;
        $ctrl.navigate = stateRouter.navigate;

        init();

        function init() {
            usersSrv.getData().then((data) => $ctrl.users = data);
        }
    }

})();