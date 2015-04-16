"use strict";

app
/**
 * Cr�er un �l�ment
 */
    .controller('creerElement', ['$scope', '$location', function ($scope, $location) {

        $scope.ajouter = function (element) {
            elements.push(element);
            $location.path('elements');
        };
    }])
/**
 * Lister les �l�ments
 */
    .controller('elementsController', ['$scope', function ($scope) {
        $scope.elements = elements;
    }]);