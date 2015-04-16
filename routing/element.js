"use strict";

app.config(['$routeProvider', 'routingconfig',function ($routeProvider, routingconfig) {
    $routeProvider
        .when(routingconfig.PREFIXE_ELEMENTS, {
            templateUrl:'views/element/liste.html',
            controller:'elementsController'
        })
        .when(routingconfig.PREFIXE_ELEMENTS+'/ajouter', {
            templateUrl:'views/element/creation.html',
            controller:'creerElement'
        })
        .otherwise({
            redirectTo:routingconfig.PREFIXE_ELEMENTS
        })
    ;
}]);