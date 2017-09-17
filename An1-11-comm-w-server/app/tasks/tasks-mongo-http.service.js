(function() {
	"use strict";

	angular
		.module("tasks")
		.config(configModule)
		.factory("tasksSrv", tasksSrv)
		.factory('mongoAPIInterceptor', mongoAPIInterceptor);

	function mongoAPIInterceptor(mongoLab) {
		return {
			request: requestInterceptor
		};

        function requestInterceptor(config) {
			config.params = {
				apiKey: mongoLab.apiKey
			};

			return config;
		}

    }

	
	function configModule($httpProvider, mongoLab) {
		$httpProvider.interceptors.push('mongoAPIInterceptor');
	}

	function tasksSrv($http, $q, mongoLab) {
		var tasksUrl =`https://api.mlab.com/api/1/databases/${mongoLab.databaseName}/collections/tasks/`;

		return {
			getTaskById,
			getTasks,
			getUserTasks,
			createTask,
			deleteTask,
			updateTask
		};

		function sendResponseData(response) {
			return response.data;
		}

		function getId(data) {
			return data._id.$oid;
        }


		function getTasks() {
			return $http({
				url: tasksUrl,
				method: 'GET',
				// params: {
				// 	apiKey: mongoLab.apiKey
				// }
			})
				.then(sendResponseData)
				.catch((response) => $q.reject(`Error: can not retrieve data from mongolab`));
		}


		function createTask(newTask) {
            return $http({
                url: tasksUrl,
                method: 'POST',
                params: {
                    apiKey: mongoLab.apiKey
                },
				data: newTask,
				transformRequest: normalizeTask

            })
                .then(sendResponseData)
                .catch((response) => $q.reject(`Error: can not create data in mongolab`));


            function normalizeTask(data) {
				data.done = false;
				return angular.toJson(data);
            }
		}


		function deleteTask(taskToDelete) {
            return $http({
                url: tasksUrl + getId(taskToDelete),
                method: 'DELETE',
                params: {
                    apiKey: mongoLab.apiKey
                }

            })
                .then(sendResponseData)
                .catch((response) => $q.reject(`Error: can not create data in mongolab`));
		}

		
		function getTaskById(taskId) {
            return $http({
                url: tasksUrl + taskId,
                method: 'GET',
                params: {
                    apiKey: mongoLab.apiKey
                },
				transformResponse: addRequestTime

            })
                .then(sendResponseData)
                .catch((response) => $q.reject(`Error: can not create data in mongolab`));

            function addRequestTime(data) {
            	var tmp = angular.fromJson(data);

            	tmp.deadline = new Date().getTime();

            	return tmp;
			}
		}


		function updateTask(taskToUpdate) {
            return $http({
                url: tasksUrl + getId(taskToUpdate),
                method: 'PUT',
                params: {
                    apiKey: mongoLab.apiKey
                },
				data: taskToUpdate
            })
                .then(sendResponseData)
                .catch((response) => $q.reject(`Error: can not create data in mongolab`));
		}


		function getUserTasks(userName) {
            return $http({
                url: tasksUrl,
                method: 'GET',
                params: {
                    apiKey: mongoLab.apiKey
                },
            })
                .then(sendResponseData)
                .catch((response) => $q.reject(`Error: can not create data in mongolab`));


            function sendResponseData(response) {
				return response.data.filter((task) => task.user.name === userName);
            }
		}
	}

})();