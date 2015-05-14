'use strict';

app
    .controller('d3Controller', ['$scope', function ($scope) {
        $scope.texte = 'du texte';
        $scope.r1 = 32;
        $scope.r2 = 57;
        $scope.r3 = 112;

        var circle = d3.selectAll("circle");
        circle.style("fill", "steelblue");
        circle.data([$scope.r1, $scope.r2, $scope.r3]);
        circle.attr("r", function (d) {
            return Math.sqrt(d);
        });
        $scope.cercle = circle;
        console.log(circle);

        $scope.majRayon = function () {
            d3.selectAll("circle").data([$scope.r1, $scope.r2, $scope.r3]).attr("r", function (d) {
                return Math.sqrt(d);
            });;
        };
    }]);