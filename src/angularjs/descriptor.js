define("descriptor", [
  './home/home.module'
], function () {

  let moduleName = 'angularJsApp';

  angular.module(moduleName,
    [
      'ngRoute',
      'home'
    ]);

  // this line must be removed
  angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);

  return moduleName;
});
