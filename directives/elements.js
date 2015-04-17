"use strict";

app
    .directive('elements', function () {
        return {
            restrict: 'E',
            templateUrl:'views/partials/element/elements.html'
        };
    });