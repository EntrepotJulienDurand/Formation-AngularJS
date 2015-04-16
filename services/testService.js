"use strict";

app
    .service('testeur', function () {
        var nomDuService = 'Testeur !!';

        this.nom = function () {
            return nomDuService;
        };
    })
;