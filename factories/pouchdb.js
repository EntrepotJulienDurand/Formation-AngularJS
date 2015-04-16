app
    .factory('pouchdb', ['dbconfig',function (dbconfig) {
        PouchDB.enableAllDbs=true;

        return new PouchDB(dbconfig.DB_NAME);

    }]);