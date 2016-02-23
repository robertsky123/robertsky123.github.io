define(['app','userInfo', "service/libsDetail", "service/libsList"], function (app, userInfo) {
  app.controller("libsDetailController", ['$scope', '$stateParams', '$state', '$libDetail','$libList', function($scope, $stateParams, $state, $libDetail, $libList) {
    var id = $stateParams.id;
    var authorId = "";
    

    $libDetail.find(id, function(error , data){
      $scope.content = marked(data);
      setTimeout(function(){
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      },0);
      
    });

    $libList.find(function(error , data){
      authorId = _.filter(data.list,{'id':id})[0].authorId;
      $scope.author = _.filter(userInfo, {'authorId':parseInt(authorId,10)})[0];
    });

  }]);

});