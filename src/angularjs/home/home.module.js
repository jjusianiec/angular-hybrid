define([
    'require',
    './home.controller',
], function (require) {

    var home = angular.module('home', []);

    home.controller('HomeController', require('./home.controller'));


    home.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/home', {
          controller: 'HomeController',
          templateUrl: './angularjs/home/home.html',
        });
    }]);

    return home;
});
