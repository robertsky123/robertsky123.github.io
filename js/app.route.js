define([
  'app',
  'controller/homeController',
  'controller/libsListController',
  'controller/libsDetailController',
  'controller/aboutusController'
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
        url: '/libs?type',
        templateUrl: '/views/libsList.html',
        controller: 'libsListController',
        pageTitle: '前端组件类库',
        reloadOnSearch: false
      })
      .state('libs.detail', {
        url: '/:id',
        templateUrl: '/views/libsList.detail.html',
        controller: 'libsDetailController',
        pageTitle: '前端组件类库'
      })
      .state('aboutus', {
        url: '/aboutus',
        templateUrl: '/views/aboutUs.html',
        controller: 'aboutUsController',
        pageTitle: '关于我们'
      });

  }]);

});