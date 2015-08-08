//bubble effect
require.config({
    baseUrl: "/js/",
    paths: {
        app: "app",
        appRoute: "app.route",
        appConifg: 'app.config',
        userInfo: 'component/userInfo'
    }
    //shim: {},
    //priority: []
});
require(["app", "appRoute", "appConifg"], function() {
    angular.bootstrap(document, ["app"]);
});