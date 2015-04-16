app
    .service('entrepotElement', ['pouchdb','$q', '$rootScope', function (pouchdb, $q, $rootScope) {
        this.persiste = function (element) {
            var deferred = $q.defer();
            element.type='element';
            pouchdb.post(element, function (err, res) {
                $rootScope.$apply(function () {
                    if(err){
                        deferred.reject(err);
                    } else {
                        deferred.resolve(res);
                    }
                });
            });

            return deferred.promise;
        };
        this.elements = function (id) {

        };
        this.supprime = function (id) {

        };

    }]);