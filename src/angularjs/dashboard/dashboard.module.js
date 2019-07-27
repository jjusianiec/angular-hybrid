define([
  'require',
], function (require) {

  var dashboard = angular.module('dashboard', []);


  dashboard.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state({
        name: 'dashboard',
        url: '/dashboard',
        template: require(`html-loader!./dashboard.html`)
      });
  }]);

  return dashboard;
});
