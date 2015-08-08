//bubble effect
require.config({
    baseUrl: "/js/",
    paths: {
        app: "app",
        appRoute: "app.route",
        appConifg: 'app.config',
        userInfo: 'component/userInfo',
        bubbleEffect : 'component/bubble-effect'
    }
    //shim: {},
    //priority: []
});
require(["app", "appRoute", "appConifg", 'bubbleEffect'], function() {
    angular.bootstrap(document, ["app"]);
});