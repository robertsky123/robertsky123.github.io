define(['app',"service/snippetsList"], function (app) {
  app.controller("snippetsListController", ['$scope', '$location', '$stateParams', '$state', '$snippetList',function($scope, $location, $stateParams, $state, $snippetList) {
    var listArray;
    $scope.type = null;

    $snippetList.find(function(error , data){
      $scope.libLists = data.list;
      listArray = _.clone(data.list);

      //url有类型查询参数
      if($stateParams.type){
        filterType($stateParams.type);
      }

      //组件类型
      data.typeList.unshift({"title" : "全部","type" : "all"});
      $scope.types = data.typeList;
    });

    //根据tag筛选
    $scope.filter = function(type){
      //改编url
      $location.search({type: type});
      filterType(type);
    };

    function filterType(type){
      $scope.type = type;
      if(type === "all"){
        $scope.libLists = angular.copy(listArray);
      }else{
        $scope.libLists =  angular.copy(_.filter(listArray, { 'type': type}));
      }
    }
    //选中当前tag
    $scope.isActive = function(type){
      if(type == $scope.type ){
        return true;
      }
    };

  }]);

});