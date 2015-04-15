"use strict";

app
/**
 * Cr�er un �l�ment
 */
    .controller('creerElement', ['$scope', function ($scope) {
        $scope.element = {
            auteur: null,
            titre: null,
            creeLe: null
        };

        $scope.ajouter = function (element) {
            elements.push(element);
            //d�tachement du bind
            $scope.element = {};
        };
    }])
/**
 * Lister les �l�ments
 */
    .controller('elementsController', ['$scope', function ($scope) {
        $scope.elements = elements;
    }]);