define([
  'app',
  'controller/homeController',
  'controller/libsListController'
  // 'modules/flyer-plaza/index',
], function (app) {
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    // 开启html5mode
    $locationProvider.html5Mode(false);

   
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home.html',
        controller: 'homeController',
        pageTitle: '首页',
      })
      .state('libs', {
        url: '/libs',
        templateUrl: '/views/libsList.html',
        controller: 'libsListController',
        pageTitle: '前端组件类库'
      });

  }]);

});