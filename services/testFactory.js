app
    .factory('testeurFactory', function () {
        var nomDuService = 'Testeur Factory !!';

        return {
            nom : function () {
                return nomDuService;
            }
        };
    });