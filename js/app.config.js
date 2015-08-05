define(['app'], function (app) {
  app.run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        NProgress.start();
      });

      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        var statName = toState.name;

        //添加不同的背景
        if(statName.indexOf("libs") !== -1){
          $("body").attr("class","pg-libslist");
        }else if(statName.indexOf("aboutus") !== -1){
          $("body").attr("class","pg-aboutus");
        }else{
          $("body").attr("class","");
        }
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