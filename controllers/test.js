app.
    controller('recupereElementsMockes', ['$scope', '$http', '$cookieStore','$rootScope', '$localStorage', 'websiteconfig', 'testeur', 'testeurFactory', 'pouchdb', function($scope, $http, $cookieStore, $rootScope, $localStorage, websiteconfig, testeur, testeurFactory, pouchdb){
        console.log(websiteconfig);
        console.log(testeurFactory.nom());
        console.log(testeur.nom());
        $scope.$storage=$localStorage;

        pouchdb.info().then(function (result) {
            console.log(result);
        });

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
