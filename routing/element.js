"use strict";

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'views/element/liste.html',
            controller:'elementsController'
        })
    ;
}]);