// app.config.js
(function () {
  'use strict';

  angular
    .module('GitHubTest')
    .config(AppConfig)

  AppConfig.$inject = ['$locationProvider', '$routeProvider', '$httpProvider'];

  function AppConfig($locationProvider, $routeProvider, $httpProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $httpProvider.defaults.headers.common.Authorization = 'Bearer ece5e2818a94925eb8f0a1edebff0192494200de';

    $routeProvider.
      when('/users', {
        templateUrl: 'app/users/index.html',
        controller: 'UserController',
        controllerAs: 'vm'
      }).
      otherwise('/users');
  }
})();