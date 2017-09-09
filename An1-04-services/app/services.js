(function () {
    angular.module('services', [])
        .constant('defaultGreeting', "Hi")
        .constant('officialGreeting',"Good morning")
        .value('userName', 'Ivan')
        .factory('userService', userService)
        .decorator('userService', userServiceLog)
        .service('personService', Person)
        .provider('userGreetingService', userGreetingService)
        .config(config);

    
    function config(userGreetingServiceProvider, officialGreeting) {
        userGreetingServiceProvider
            .configGreeting(officialGreeting);
    }
    function userService() {

        var currentUser = 'Ivan';

        return {
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };

        function setCurrentUser(user) {
            currentUser = user;
        }

        function getCurrentUser() {
            return currentUser;
        }
    }
    
    function userGreetingService(defaultGreeting) {
        var configValue = defaultGreeting; //'Hi';

        return { //provider object
            $get: $get,
            configGreeting: configGreeting
        };

        function configGreeting(value) {
            if (value) {
                configValue = value;
                return this;
            } else {
                return configValue;
            }
        }

        function $get($http) {
            return { //service object
                greet: greet
            }
        }

        function greet(user) {
            console.log(`${configValue}, ${user}`);
        }
        
    }

})();