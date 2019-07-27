define([
    'require',
    './home.controller',
], function (require) {

    var home = angular.module('home', []);

    home.controller('HomeController', require(`./home.controller`));

    home.config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state({
          name: 'angularjs-home',
          url: '/home',
          template: require(`html-loader!./home.html`)
        });

    }]);

    return home;
});
