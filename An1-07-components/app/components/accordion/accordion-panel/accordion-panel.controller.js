(function () {
    angular
        .module('accordionModule')
        .controller("AccordionPanel", AccordionPanel);

    function AccordionPanel() {
        var $ctrl = this;

        $ctrl.selected = false;
        $ctrl.select = function () {
            $ctrl.parent.selectPanel($ctrl);
        };

        $ctrl.$onInit = function () {
            $ctrl.parent.addPanel($ctrl);
        };

        $ctrl.turnOn = function () {
            $ctrl.selected = true;
        };

        $ctrl.turnOff = function () {
            $ctrl.selected = false;
        }
    }
})();