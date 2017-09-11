(function () {
    angular
        .module('accordionModule')
        .component('accordionPanel', {
            templateUrl: 'components/accordion/accordion-panel/accordion-panel.html',
            controller: "AccordionPanel",
            transclude: true,
            require: {
                "parent": '^accordion'
            },
            bindings: {
                header: '@'
            }
        })
})();