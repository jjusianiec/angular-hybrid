define("descriptor", [
  './home/home.module',
  './dashboard/dashboard.module'
], function () {

  let moduleName = 'angularJsApp';

  var app = angular.module(moduleName,
    [
      'ui.router',
      'ui.router.upgrade',
      'home',
      'dashboard'
    ]);

  app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
  }]);

  // this line must be removed
  // angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);

  return moduleName;
});
