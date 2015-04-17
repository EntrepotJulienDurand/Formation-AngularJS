app
    .service('entrepotElement', ['pouchdb', '$q', '$rootScope', function (pouchdb, $q, $rootScope) {
        this.persiste = function (element) {
            var deferred = $q.defer();
            element.type = 'element';
            pouchdb.post(element, function (err, res) {
                $rootScope.$apply(function () {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(res);
                    }
                });
            });

            return deferred.promise;
        };
        this.elements = function () {
            var deferred = $q.defer();

            function prometsLesElementsDeTypeElement(element) {
                if (element.type === 'element') {
                    emit(element);
                }
            }

            function rendLeResultatExploitable(res) {
                var elements = res.rows.map(function (element) {
                    return element.key;
                });
                return elements;
            }

            pouchdb
                .query(prometsLesElementsDeTypeElement, {include_docs: true})
                .then(rendLeResultatExploitable)
                .then(deferred.resolve)
                .catch(deferred.reject);

            return deferred.promise;
        };
        this.element = function (id) {
            var deferred = $q.defer();

            pouchdb
                .get(id, {include_docs: true})
                .then(deferred.resolve)
                .catch(deferred.reject);

            return deferred.promise;
        };
        this.supprime = function (id) {
            var deferred = $q.defer();
            pouchdb
                .get(id)
                .then(function (doc) {
                    return pouchdb.remove(doc._id, doc._rev);
                })
                .then(deferred.resolve)
                .catch(deferred.reject);
            return deferred.promise;
        };

    }]);