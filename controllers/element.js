"use strict";

app
/**
 * Créer un élément
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
 * Lister les éléments
 */
    .controller('elementsController', ['$scope', function ($scope) {
        $scope.elements = [];
    }]);