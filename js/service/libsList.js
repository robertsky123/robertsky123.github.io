define(['app'], function(app) {

    app.factory('$libList', ['$http', function($http) {
        var find = function(callback) {
            var path = SITE_CONFIG.MODAL_PATH + 'libslist.json?v=' + SITE_CONFIG.VERSION;
            $http.get(path).success(function(json) {
                    callback(null, json);
            }).error(function(){
              console.log("$libList 服务失败");
            });
        };
        return {
            find: find
        };
    }]);

});
