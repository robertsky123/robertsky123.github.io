define(['app',"service/libsList"], function (app) {
  app.controller("libsListController", ['$scope', '$stateParams', '$state', '$libList',function($scope, $stateParams, $state, $libList) {
    var listArray;
    $libList.find(function(error , data){
      $scope.libLists = data.list;
      listArray = _.clone(data.list);
    });

    $scope.filter = function(){
      $scope.libLists =  angular.copy(_.filter(listArray, { 'type': 'modal'}));
    };

    $scope.filters = function(){
      $scope.libLists =  angular.copy(listArray);
    };

  }]);

});