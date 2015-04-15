"use strict";

app
/**
 * Cr�er un �l�ment
 */
    .controller('creerElement', ['$scope', '$location', function ($scope, $location) {
        $scope.element = {
            auteur: null,
            titre: null,
            creeLe: null
        };

        $scope.ajouter = function (element) {
            elements.push(element);
            //d�tachement du bind
            $scope.element = {};
            $location.path('elements');
        };
    }])
/**
 * Lister les �l�ments
 */
    .controller('elementsController', ['$scope', function ($scope) {
        $scope.elements = elements;
    }]);