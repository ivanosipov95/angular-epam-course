(function () {
    angular.module('app')
        .directive('unorderedList1', unorderedList1)
        .directive('unorderedList2', unorderedList2)
        .directive('unorderedList3', unorderedList3)
        .directive('unorderedList4', unorderedList4)
        .directive('unorderedList5', unorderedList5)
        .directive('unorderedList6', unorderedList6)
        .directive('unorderedList7', unorderedList7)
        .directive('unorderedList8', unorderedList8)
        .directive('unorderedList9', unorderedList9)
        .directive('unorderedList10', unorderedList10)
        .directive('unorderedList11', unorderedList11)
        .directive('unorderedList12', unorderedList12)
        .directive('unorderedListAttrs', unorderedListAttrs)
        .directive('unorderedListScope', unorderedListScope)
        .directive('scopeDemoFalse', scopeDemoFalse)
        .directive('scopeDemoTrue', scopeDemoTrue)
        .directive('scopeDemoIsolated', scopeDemoIsolated)
        .directive('scopeDemoIsolated1', scopeDemoIsolated1)
        .directive('scopeDemoIsolated2', scopeDemoIsolated2)
        .directive('scopeDemoIsolated3', scopeDemoIsolated3)
        .directive('scopeDemoIsolated4', scopeDemoIsolated4)
        .directive('scopeDemoIsolated5', scopeDemoIsolated5)
        .directive('scopeDemoIsolated6', scopeDemoIsolated6)
        .directive('component', component)
        .directive('decor1', decor1)
        .directive('decor2', decor2)
        .directive('greeting1', greeting1)
        .directive('greeting2', greeting2)
        .directive('greeting3', greeting3)
        .directive('greeting4', greeting4)
        .directive('greeting5', greeting5)
        .directive('greeting6', greeting6)
        .directive('greeting7', greeting7)
        .directive('hi', hi)
        .directive('hi2', hi2)
        .directive('hi3', hi3)
        .directive('hi4', hi4)
        .directive('hello', hello)
        .directive('hello2', hello2)
        .directive('hello3', hello3)
        .directive('hello4', hello4)
        .directive('domains', domains)
        .directive('myMultiElem', myMultiElem)
    ;

    function unorderedList1() {
        return function (scope) {
            var data = scope.products;

            if (angular.isArray(data)) {
                angular.forEach(data, dataItem => {
                    console.log(`Item: ${dataItem.name}`);
                })
            }
        }
    }

    function unorderedList2() {
        return {
            link: function (scope) {
                var data = scope.products;

                if (angular.isArray(data)) {
                    angular.forEach(data, dataItem => {
                        console.log(`Item: ${dataItem.name}`);
                    })
                }
            }
        }
    }

    function unorderedList3() {
        return {
            link: function (scope, elem, attrs) {
                var data = scope[attrs['unorderedList3']];
                var propertyName = attrs['listProperty'];

                if (angular.isArray(data)) {
                    angular.forEach(data, dataItem => {
                        // console.log(`Item: ${dataItem[propertyName]}`);
                        console.log(`Item: ${scope.$eval(propertyName, dataItem)}`);
                    })
                }
            }
        }
    }

    function unorderedList4() {
        return {
            link: function (scope, elem, attrs) {
                var data = scope[attrs['unorderedList4']];
                var propertyName = attrs['listProperty'];

                if (angular.isArray(data)) {
                    var listElem = angular.element('<ul>');

                    angular.forEach(data, dataItem => {
                        listElem.append(angular.element('<li>').text(`Item: ${scope.$eval(propertyName, dataItem)}`));
                    });

                    elem.append(listElem);
                }
            }
        }
    }


    function unorderedList5() {
        return {
            link: function (scope, elem, attrs) {
                var data = scope[attrs['unorderedList5']];
                var propertyName = attrs['listProperty'];


                if (angular.isArray(data)) {
                    var listElem = angular.element('<ul>');

                    angular.forEach(data, dataItem => {

                        var itemElem = angular.element('<li>');
                        listElem.append(itemElem);
                        //
                        // var watherFn = function (watchScope) {
                        //     return watchScope.$eval(propertyName, dataItem);
                        // };
                        //
                        // scope.$watch(watherFn, (newVal, oldVal) => {
                        //     itemElem.text(newVal);
                        // })


                        var watherFn = function (watchScope) {
                            return dataItem;
                        };

                        scope.$watchCollection(watherFn, (newVal, oldVal) => {
                            itemElem.text(scope.$eval(propertyName, dataItem));
                        })
                    });

                    elem.append(listElem);
                }
            }
        }
    }

    function unorderedListAttrs() {
        return {
            link: function (scope, elem, attrs) {
                var data = scope[attrs['unorderedListAttrs']];

                attrs.$observe('listProperty', (newVal, oldVal) => {
                    elem.html('');

                    var property = newVal;
                    if (angular.isArray(data)) {
                        var listElem = angular.element('<ul>');
                        angular.forEach(data, dataItem => {
                            var itemElem = angular.element('<li>');
                            listElem.append(itemElem);

                            var watherFn = function (watchScope) {
                                return dataItem;
                            };

                            scope.$watchCollection(watherFn, (newVal, oldVal) => {
                                itemElem.text(scope.$eval(property, dataItem));
                            })
                        });
                        elem.append(listElem);
                    }
                });
            }
        }
    }

    function unorderedListScope() {
        return {
            scope: {
                unorderedListScope: '=',
                listProperty: '='
            },
            link: function (scope, elem, attrs) {
                var data = scope.unorderedListScope;

                scope.$watch('listProperty', (newVal, oldVal) => {
                    elem.html('');

                    var property = newVal;
                    if (angular.isArray(data)) {
                        var listElem = angular.element('<ul>');
                        angular.forEach(data, dataItem => {
                            var itemElem = angular.element('<li>');
                            listElem.append(itemElem);

                            var watherFn = function (watchScope) {
                                return dataItem;
                            };

                            scope.$watchCollection(watherFn, (newVal, oldVal) => {
                                itemElem.text(scope.$eval(property, dataItem));
                            })
                        });
                        elem.append(listElem);
                    }
                });
            }
        }
    }


    function unorderedList6() {
        return {
            restrict: 'EACM',
            link: function (scope, elem, attrs) {
                var data = scope[attrs['unorderedList6'] || attrs['listSource']];
                var propertyName = attrs['listProperty'] || 'price | currency';

                if (angular.isArray(data)) {
                    var listElem = angular.element('<ul>');

                    angular.forEach(data, dataItem => {
                        listElem.append(angular.element('<li>').text(`Item: ${scope.$eval(propertyName, dataItem)}`));
                    });

                    if (elem[0].nodeType === 8) {
                        elem.parent().append(listElem);
                    } else {

                        elem.append(listElem);
                    }

                }
            }
        }
    }

    function unorderedList7() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var markup = `<ul><li ng-repeat="item in data">{{item.price | currency}}</li></ul>`;
                scope.data = scope[attrs['unorderedList7']];
                elem.append(markup);
            }
        }
    }

    function unorderedList8($compile) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var markup = `<ul><li ng-repeat="item in data">{{item.price | currency}}</li></ul>`;
                scope.data = scope[attrs['unorderedList8']];


                var el = $compile(markup)(scope);
                elem.append(el);
            }
        }
    }

    function unorderedList9() {
        return {
            restrict: 'A',
            template: `<ul>
                            <li ng-repeat="item in data">{{item.price | currency}}</li>
                        </ul>`,
            link: function (scope, elem, attrs) {
                scope.data = scope[attrs['unorderedList9']];
            }
        }
    }

    function unorderedList10() {
        return {
            restrict: 'A',
            template: function () {
                return angular.element(document.querySelector('#listTemplate')).html();
            },
            link: function (scope, elem, attrs) {
                scope.data = scope[attrs['unorderedList10']];
            }
        }
    }

    function unorderedList11() {
        return {
            restrict: 'A',
            templateUrl: 'templates/tableTemplate.html',
            link: function (scope, elem, attrs) {
                scope.data = scope[attrs['unorderedList11']];
            }
        }
    }

    function unorderedList12() {
        return {
            restrict: 'A',
            templateUrl: function (tElem, tAttrs) {
                return tAttrs['template'] === 'table'
                    ? 'templates/tableTemplate.html'
                    : 'templates  /itemTemplate.html'
            },
            link: function (scope, elem, attrs) {
                scope.data = scope[attrs['unorderedList12']];
            }
        }
    }


    function scopeDemoFalse() {
        return {
            restrict: 'A',
            scope: false,
            templateUrl: 'templates/scopeDemoFalseTemplate.html',
        }
    }

    function scopeDemoTrue() {
        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'templates/scopeDemoFalseTemplate.html',
        }
    }

    function scopeDemoIsolated() {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'templates/userDataTemplate.html',
            link: function (scope) {
                scope.user = {};

                scope.user.name = 'Ivan';

            }
        }
    }

    function component() {
        return {
            restrict: 'E',
            scope: {},
            link: function (scope) {
                scope.dataSource = 'directive';
                console.log('component');
                console.log(`dataSource = ${scope.dataSource}`);
            }
        }
    }

    function decor1() {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope) {
                scope.dataSource = 'decor1';
                console.log('decor1');
                console.log(`dataSource = ${scope.dataSource}`);
            }
        }
    }

    function decor2() {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope) {
                // scope.dataSource = 'decor2';
                console.log('decor2');
                console.log(`dataSource = ${scope.dataSource}`);
            }
        }
    }

    function scopeDemoIsolated1() {
        return {
            restrict: 'A',
            scope: {
                local: '@prop'
            },
            templateUrl: 'templates/scopeBindingsTemplate.html'
        }
    }

    function scopeDemoIsolated2() {
        return {
            restrict: 'A',
            scope: {
                local: '<prop'
            },
            template: `<input ng-model="local.prop"/>`
        }
    }

    function scopeDemoIsolated3() {
        return {
            restrict: 'A',
            scope: {
                local: '=prop',
            },
            templateUrl: 'templates/scopeBindingsTemplate.html'
        }
    }

    function scopeDemoIsolated4() {
        return {
            restrict: 'A',
            scope: {
                local: '<prop',
                cityFn: '&city'
            },
            templateUrl: 'templates/scopeEvalTemplate.html'
        }
    }

    function scopeDemoIsolated5() {
        return {
            restrict: 'A',
            scope: {
                cityFn: '&city'
            },
            templateUrl: 'templates/scopeEvalD ataTemplate.html'
        }
    }


    function greeting1() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/greetingTemplate.html',
            controller: function ($scope) {
                $scope.sayHello = function () {
                    console.log("Hello");
                }
            }
        }
    }

    function greeting2() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/greetingTemplate.html',
            controller: 'Greeting'
        }
    }

    function greeting3() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/greetingTemplate.html',
            controller: '@',
            name: 'ctrl'
        }
    }

    function scopeDemoIsolated6() {
        return {
            restrict: 'A',
            scope: {},
            template: '<p>{{$ctrl.prop}}={{$ctrl.result}}</p>',
            controllerAs: '$ctrl',
            bindToController: {
                prop: '@'
            },
            controller: function ($scope) {
                var $ctrl = this;
                $ctrl.result = 111;

                console.log($scope);
            }
        }
    }

    function greeting4() {
        var greetings = [];

        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/greetingTemplate.html',
            controller: function ($scope) {
                $scope.sayHello = function () {
                    alert(greetings.join());
                };

                this.addGreeting = function (greeting) {
                    greetings.push(greeting);
                }
            },
        }
    }

    function hi() {
        return {
            restrict: 'A',
            require: 'greeting4',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.addGreeting('Hi');
            }
        }
    }

    // function hello() {
    //     return {
    //         restrict: 'A',
    //         require: 'greeting4',
    //         link: function (scope, elem, attrs, ctrl) {
    //             ctrl.addGreeting('Hello');
    //         }
    //     }
    // }

    function hello() {
        return {
            restrict: 'A',
            require: {parent: 'greeting4'},
            bindToController: true,
            controller: function () {

                this.$onInit = function () {
                    this.parent.addGreeting("hello");
                }
            }
        }
    }

    function domains() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope,  elem, attrs, ctrl) {
                console.log(ctrl.$validators.email);
                ctrl.$validators.domains = function (modelValue, viewValue) {
                    console.log(`model value: ${modelValue}`);
                    console.log(`view value: ${viewValue}`);

                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }

                    return false;
                }
            }
        }
    }

    function greeting5() {
        var greetings = [];

        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            templateUrl: 'templates/greetingTranscludeTemplate.html',
            controller: function ($scope) {
                $scope.sayHello = function () {
                    alert(greetings.join());
                };

                this.addGreeting = function (greeting) {
                    greetings.push(greeting);
                }
            },
        }
    }

    function hi2() {
        return {
            restrict: 'A',
            require: '^greeting5',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.addGreeting('Hi');
            }
        }
    }

    function hello2() {
        return {
            restrict: 'A',
            require: '^greeting5',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.addGreeting('Hello');
            }
        }
    }

    function greeting6() {
        var greetings = [];

        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            templateUrl: 'templates/greetingTranscludeTemplate.html',
            controller: function ($scope) {
                $scope.sayHello = function () {
                    alert(greetings.join());
                };

                this.addGreeting = function (greeting) {
                    greetings.push(greeting);
                }
            },
        }
    }

    function hi3() {
        return {
            restrict: 'A',
            priority: 2,
            require: '^greeting6',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.addGreeting('Hi');
            }
        }
    }

    function hello3() {
        return {
            restrict: 'A',
            priority: 1,
            require: '^greeting6',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.addGreeting('Hello');
            }
        }
    }

    function greeting7() {
        var greetings = [];

        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            templateUrl: 'templates/greetingTranscludeTemplate.html',
            controller: function ($scope) {
                $scope.sayHello = function () {
                    alert(greetings.join());
                };

                this.addGreeting = function (greeting) {
                    greetings.push(greeting);
                }
            },
        }
    }

    function hi4() {
        return {
            restrict: 'A',
            priority: 1,
            require: '^greeting7',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.addGreeting('Hi');
            }
        }
    }

    function hello4() {
        return {
            restrict: 'A',
            priority: 2,
            terminal: true,
            require: '^greeting7',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.addGreeting('Hello');
            }
        }
    }

    function myMultiElem() {
        return {
            restrict: 'A',
            multiElement: true,
            link: function (scope, elem, attrs) {
                console.log(elem);
                angular.element(elem[0]).css('color', 'red');
            }
        }
    }
})();