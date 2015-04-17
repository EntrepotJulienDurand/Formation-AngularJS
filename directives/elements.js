"use strict";

app
    .directive('elements', function () {
        return {
            restrict: 'E',
            templateUrl:'views/partials/element/elements.html'
        };
    })
    .directive('trElement', function () {
        return {
            restrict: 'A',
            templateUrl:'views/partials/element/trElement.html'
        };
    });