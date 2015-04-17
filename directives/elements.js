"use strict";

app
    .directive('elements', function () {
        return {
            restrict: 'AEC',
            templateUrl:'views/partials/element/elements.html'
        };
    });