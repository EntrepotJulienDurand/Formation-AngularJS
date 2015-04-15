"use strict";

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/elements', {
            templateUrl:'views/element/liste.html',
            controller:'elementsController'
        })
        .when('/elements/ajouter', {
            templateUrl:'views/element/creation.html',
            controller:'creerElement'
        })
    ;
}]);