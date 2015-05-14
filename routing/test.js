"use strict";

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/test', {
            templateUrl:'views/element/liste.html',
            controller:'recupereElementsMockes'
        })
        .when('/document/graphique',{
            templateUrl:'views/documents/graphique.html',
            controller:'d3Controller'
        })
        .otherwise({
            redirectTo:'/elements'
        })
    ;
}]);