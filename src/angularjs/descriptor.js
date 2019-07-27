define("descriptor", [
  './home/home.module'
], function () {

  let moduleName = 'angularJsApp';

  var app = angular.module(moduleName,
    [
      'ui.router',
      'ui.router.upgrade',
      'home'
    ]);

  app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);


  // this line must be removed
  // angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);

  return moduleName;
});
