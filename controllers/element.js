"use strict";

app
/**
 * Créer un élément
 */
    .controller('creerElement', ['$scope', '$location', function ($scope, $location) {
        $scope.element = {
            auteur: null,
            titre: null,
            creeLe: null
        };

        $scope.ajouter = function (element) {
            elements.push(element);
            //détachement du bind
            $scope.element = {};
            $location.path('elements');
        };
    }])
/**
 * Lister les éléments
 */
    .controller('elementsController', ['$scope', function ($scope) {
        $scope.elements = elements;
    }]);