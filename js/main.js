require.config({
    baseUrl: "/js/",
    paths: {
        app: "app",
        appRoute: "app.route",
        appConifg: 'app.config'
    },
    //shim: {},
    //priority: []
});
require(["app", "appRoute", "appConifg"], function() {
    angular.bootstrap(document, ["app"]);
});