define(['app','userInfo'], function (app, userInfo) {
  app.controller("aboutUsController", ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {

    $scope.authors = userInfo;

  }]);

});