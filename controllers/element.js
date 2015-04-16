"use strict";

app
/**
 * Cr�er un �l�ment
 */
    .controller('creerElement', ['$scope', 'entrepotElement','$location', function ($scope, entrepotElement, $location) {

        $scope.ajouter = function (element) {
            entrepotElement
                .persiste(element)
                .then(function (res) {
                    $location.path('/elements');
                })
        };
    }])
/**
 * Lister les �l�ments
 */
    .controller('elementsController', ['$scope', function ($scope) {
        $scope.elements = [];
    }]);