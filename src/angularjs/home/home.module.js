define([
    'require',
    './home.controller',
], function (require) {

    var home = angular.module('home', []);

    home.controller('HomeController', require(`./home.controller`));


    home.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/home', {
          controller: 'HomeController',
          template: require(`html-loader!./home.html`),
        });
    }]);

    return home;
});
