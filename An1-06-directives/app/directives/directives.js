(function () {
    angular.module('app')
        .directive('unorderedList1', unorderedList1)
        .directive('unorderedList2', unorderedList2)
        .directive('unorderedList3', unorderedList3)
        .directive('unorderedList4', unorderedList4)
        .directive('unorderedList5', unorderedList5)
        .directive('unorderedList6', unorderedList6)
        .directive('unorderedListAttrs', unorderedListAttrs)
        .directive('unorderedListScope', unorderedListScope)
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

})();