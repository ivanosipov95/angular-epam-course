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
        .directive('component', component)
        .directive('decor1', decor1)
        .directive('decor2', decor2)
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
            scope: {

            },
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
            scope: {

            },
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

})();