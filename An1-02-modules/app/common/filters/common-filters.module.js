(function() {
    angular.module('commonFilters', [])
        .config(configFilter)
        .run(runFilter);

    function configFilter() {
        console.log('Config Filter');
    }

    function runFilter() {
        console.log('Run Filter');
    }
})();