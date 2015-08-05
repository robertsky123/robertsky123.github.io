define(['app',"service/libsDetail"], function (app) {
  app.controller("libsDetailController", ['$scope', '$stateParams', '$state', '$libDetail',function($scope, $stateParams, $state, $libDetail) {
    var id = $stateParams.id;
    $libDetail.find(id, function(error , data){
      $scope.content = marked(data);
    });

  }]);

});