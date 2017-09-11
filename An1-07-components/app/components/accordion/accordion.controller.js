(function () {

    angular.module('accordionModule')
        .controller("Accordion", Accordion);

    function Accordion() {
        var $ctrl = this;
        var panels = [];

        $ctrl.addPanel = function (panel) {
            panels.push(panel);
        };


        $ctrl.selectPanel = function (panel) {
            for (var p of panels) {
                if (p === panel) {
                    if (p.selected) {
                        p.turnOff();
                    } else {
                        p.turnOn();
                    }
                } else {
                    p.turnOff();
                }
            }
        }
    }
})();