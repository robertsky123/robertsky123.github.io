define(['app'], function (app) {
  app.run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        NProgress.start();
      });

      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        NProgress.done();
      });
    }
  ]);



  app.config(['$httpProvider', function ($httpProvider) {
    // reponse拦截器，判断session过期等场景
    // var interceptor = ['$q', '$rootScope', function ($q, $rootScope) {
    //   return {
    //     response: function (resp) {
    //       //截获所有reponse，在登陆超时时，回到首页
    //       if (resp && resp.data && resp.data.code === 401) {
    //         $(window).unbind('beforeunload');
    //         return window.open('/', '_self');
    //       }
    //       return resp;
    //     },
    //     responseError: function (rejection) {
    //       if (rejection.status === 0) {
    //         $alert.error('请求失败,请检查您的网络环境');
    //         return;
    //       }
    //       return $q.reject(rejection);
    //     }
    //   };
    // }];
    // $httpProvider.interceptors.push(interceptor);
  }]);

});