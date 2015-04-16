app.
    controller('recupereElementsMockes', ['$scope', '$http', '$cookieStore','$rootScope', '$localStorage', 'websiteconfig', 'testeur', function($scope, $http, $cookieStore, $rootScope, $localStorage, websiteconfig, testeur){
        console.log(websiteconfig);
        console.log(testeur.nom());
        $scope.$storage=$localStorage;

        recupereLesElementsDeLaRessourceMocke();

        function recupereLesElementsDeLaRessourceMocke() {
            $cookieStore.put('nom', 'Jul');
            $rootScope.nom = $cookieStore.get('nom');
            // Simple GET request example :
            $http.get('https://demo6712807.mockable.io/elements').
                success(function (data) {
                    $scope.elements = data;
                    $localStorage.elements = data;
                }).
                error(function (data, status, headers, config) {
                    console.error(data, status, headers, config);
                });
        }
    }]);
