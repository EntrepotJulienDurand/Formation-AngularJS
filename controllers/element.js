"use strict";

app
/**
 * Cr�er un �l�ment
 */
    .controller('creerElement', ['$scope', 'entrepotElement', '$location', function ($scope, entrepotElement, $location) {
        $scope.libelleBouton = 'Ajouter';

        function dateValide() {
            if (!$scope.element.creeLe) {
                $scope.afficherAlerteDate = true;
                return false;
            }
            return true;
        }

        $scope.action = function (element) {
            if (dateValide()) {
                entrepotElement
                    .persiste(element)
                    .then(function (res) {
                        $location.path('/elements');
                        return res;
                    })
            }
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
            alert('Je s\'appelle groot');
        };
    }])
/**
 * Lister les �l�ments
 */
    .controller('elementsController', ['$scope', 'entrepotElement', function ($scope, entrepotElement) {
        entrepotElement
            .elements()
            .then(function (res) {
                $scope.elements = res;
            });

        $scope.editer = function () {

        }
    }]);

