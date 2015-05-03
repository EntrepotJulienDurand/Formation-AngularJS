app
    .service('entrepotElement', ['fournisseurPouchDB', function (fournisseurPouchDB) {
        this.persiste = fournisseurPouchDB.deType('element').persiste;

        this.elements = fournisseurPouchDB.deType('element').elements;

        this.element = fournisseurPouchDB.deType('element').element;

        this.supprime = fournisseurPouchDB.deType('element').supprime;

    }]);