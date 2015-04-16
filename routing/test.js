"use strict";

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/test', {
            templateUrl:'views/element/liste.html',
            controller:'recupereElementsMockes'
        })
        .otherwise({
            redirectTo:'/elements'
        })
    ;
}]);