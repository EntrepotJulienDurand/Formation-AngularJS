"use strict";

app
/**
 * Créer un élément
 */
    .controller('creerElement', ['$scope', '$location', function ($scope, $location) {

        $scope.ajouter = function (element) {
            elements.push(element);
            $location.path('elements');
        };
    }])
/**
 * Lister les éléments
 */
    .controller('elementsController', ['$scope', function ($scope) {
        $scope.elements = elements;
    }]);