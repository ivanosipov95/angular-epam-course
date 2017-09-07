(function() {
    angular.module('feature', [])
        .config(configFeature)
        .run(runFeature);

    function configFeature() {
        console.log('Config Feature');
    }

    function runFeature() {
        console.log('Run Feature');
    }
})();