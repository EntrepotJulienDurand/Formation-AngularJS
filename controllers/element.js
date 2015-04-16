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
                    return res;
                })
        };
    }])
/**
 * Lister les éléments
 */
    .controller('elementsController', ['$scope', 'entrepotElement', function ($scope, entrepotElement) {
        entrepotElement
            .elements()
            .then(function (res) {
                $scope.elements = res;
            });
        
        $scope.editer= function () {
            
        }
    }]);