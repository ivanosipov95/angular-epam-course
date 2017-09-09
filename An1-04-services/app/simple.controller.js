(function () {
    
    angular.module('app')
        .controller('Simple', Simple);
    
    function Simple(userService, personService, userGreetingService, userName) {
        console.log(userService);
        console.log(userService.getCurrentUser());
        //
        // userService.setCurrentUser('Ivan');
        // console.log(userService.getCurrentUser());

        // console.log(personService);
        // personService.setAge(16);
        // console.log(personService.getAge());

        // console.log(userGreetingService);
        //
        // userGreetingService.greet(userName);

    }
})();