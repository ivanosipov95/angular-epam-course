(function () {
    "use strict";

    angular
        .module("feature")
        .factory("tasksDataService", tasksDataService);

    function tasksDataService($q, $timeout) {
        let tasks = [
            {
                "id": "1",
                "action": "Estimate",
                "description": "Description of the task",
                "done": "false",
                "userId": "1",
                "userName": "Alan",
                "deadline": "2015-05-30",
                "priority": "1",
                "estimation": "3"
            },
            {"id": "2", "action": "Create...", "done": "false", "userId": "2", "userName": "Bella"},
            {"id": "3", "action": "Update...", "done": "false", "userId": "3", "userName": "Vardan"},
            {"id": "4", "action": "Delete...", "done": "false", "userId": "4", "userName": "Galiia"},
            {"id": "5", "action": "Deploy", "done": "false", "userId": "5", "userName": "Dmitriy"}
        ];
        let users = [
            {"name": "Ann June"},
            {"name": "Ban Gule"},
            {"name": "Cider Duren"}
        ];

        return {
            getTasks: getTasks,
            getTasksNew: getTasksNew,
            getUsers: getUsers
        };

        function getTasks() {
            var def = $q.defer();

            $timeout(() => {
                var flag = true;

                if (flag) {
                    def.notify('Start...');
                    def.notify('Almost Finish...');
                    def.notify('Finish');
                    def.resolve(tasks);

                } else {
                    def.reject("error tasks")
                }

            }, 2000);

            return def.promise;
        }

        function getTasksNew() {
            return $q(function (resolve, reject) {
                $timeout(() => {
                    var flag = true;
                    flag ? resolve(tasks) : reject('Error from 2-nd function');
                }, 3000);
            });
        }

        function getUsers() {
            return $timeout(() => {
                return users;
            }, 2000)
        }
    }

})();
