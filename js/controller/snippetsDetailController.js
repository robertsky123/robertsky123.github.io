define(['app','userInfo', "service/snippetsDetail", "service/snippetsList"], function (app, userInfo) {
  app.controller("snippetsDetailController", ['$scope', '$stateParams', '$state', '$snippetDetail','$snippetList', function($scope, $stateParams, $state, $snippetDetail, $snippetList) {
    var id = $stateParams.id;
    var authorId = "";
    

    $snippetDetail.find(id, function(error , data){
      $scope.content = marked(data);
      setTimeout(function(){
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      },0);
    });

    $snippetList.find(function(error , data){
      authorId = _.filter(data.list,{'id':id})[0].authorId;
      $scope.author = _.filter(userInfo, {'authorId':parseInt(authorId,10)})[0];
    });

  }]);

});