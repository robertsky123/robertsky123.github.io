define(['app'], function(app) {

    app.factory('$libDetail', ['$http', function($http) {
        var find = function(id,callback) {
            var path = SITE_CONFIG.COLLECTION_PATH + id + '.md?v=' + SITE_CONFIG.VERSION;
            $http.get(path).success(function(json) {
                    callback(null, json);
            }).error(function(){
              console.log("$libDetail 服务失败");
            });
        };
        return {
            find: find
        };
    }]);

});
