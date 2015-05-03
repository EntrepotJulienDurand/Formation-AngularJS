'use strict';

function FournisseurDocumentsPouchDB(pouchdb, $q, $rootScope) {
    this._type = 'element';

    var that = this;

    this.persiste = function (element) {
        var deferred = $q.defer();
        element.type = that._type;
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

        function prometsLesElements(element, emit) {
            if (element.type === that._type) {
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
            .query(prometsLesElements, {include_docs: true})
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
}

FournisseurDocumentsPouchDB.prototype.deType = function (type) {
    this._type=type;
    return this;
};

app
    .factory('fournisseurPouchDB', ['pouchdb', '$q', '$rootScope', function (pouchdb, $q, $rootScope) {
        return new FournisseurDocumentsPouchDB(pouchdb, $q, $rootScope);
    }]);