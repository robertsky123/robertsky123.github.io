define(['app',"service/libsList"], function (app) {
  app.controller("libsListController", ['$scope', '$stateParams', '$state', '$libList',function($scope, $stateParams, $state, $libList) {

    $libList.find(function(error , data){
      $scope.libLists = data.list;
    });

  }]);

});