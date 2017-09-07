(function() {
    angular.module('feature')
        .service('days', days);

    function days(nowValue) {
        this.today = nowValue.getDay();
        this.tomorrow = (nowValue.getDay() + 1) % 7;
    }
})();