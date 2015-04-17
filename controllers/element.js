"use strict";

app
/**
 * Créer un élément
 */
    .controller('creerElement', ['$scope', 'entrepotElement', '$location', function ($scope, entrepotElement, $location) {
        $scope.element = {
            auteur: null,
            titre: null,
            creeLe: null,
            description: null,
            prix: null
        };
        $scope.libelleBouton = 'Ajouter';

        $scope.remplitFormulaire = function () {
            $scope.element.auteur = chance.name();
            $scope.element.titre = 'jdu';
            $scope.element.creeLe = new Date();
            $scope.element.description = 'jdu';
            $scope.element.prix = 15;
        };

        $scope.action = function (element) {
            validePersisteEtRedirige($scope, entrepotElement, element, $location);
        };
    }])
    .controller('editerElement', ['$scope', 'entrepotElement', '$location', '$routeParams', function ($scope, entrepotElement, $location, $routeParams) {
        $scope.libelleBouton = 'Editer';
        entrepotElement
            .element($routeParams.id)
            .then(function (res) {
                $scope.element = res;
                return res;
            });
        $scope.action = function (element) {
            validePersisteEtRedirige($scope, entrepotElement, element, $location);
        };
    }])
/**
 * Lister les éléments
 */
    .controller('supprimerElement', ['$scope', 'entrepotElement', '$routeParams', '$location', function ($scope, entrepotElement, $routeParams, $location) {
        entrepotElement
            .supprime($routeParams.id)
            .then(entrepotElement.elements)
            .then(function (res) {
                $location.path('/elements');
                $scope.elements = res;
                return res;
            });
    }])
    .controller('elementsController', ['$scope', 'entrepotElement', function ($scope, entrepotElement) {
        entrepotElement
            .elements()
            .then(function (res) {
                $scope.elements = res;
                return res;
            });
    }]);

function dateValide($scope) {
    if (!$scope.element.creeLe) {
        $scope.afficherAlerteDate = true;
        return false;
    }
    return true;
}


function validePersisteEtRedirige($scope, entrepotElement, element, $location) {
    if (dateValide($scope)) {
        entrepotElement
            .persiste(element)
            .then(function (res) {
                $location.path('/elements');
                return res;
            })
    }
}
