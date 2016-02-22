define(['app'], function(app) {

    app.factory('$snippetDetail', ['$http', function($http) {
        var find = function(id,callback) {
            var path = SITE_CONFIG.SNIPPETS_PATH + id + '.md?v=' + (new Date()).getTime();
            $http.get(path).success(function(json) {
                    callback(null, json);
            }).error(function(){
              console.log("$snippetDetail 服务失败");
            });
        };
        return {
            find: find
        };
    }]);

});
