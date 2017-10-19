// app.config.js
(function () {
  'use strict';

  angular
    .module('GitHubTest')
    .config(AppConfig)

  AppConfig.$inject = ['$locationProvider', '$routeProvider', '$httpProvider'];

  function AppConfig($locationProvider, $routeProvider, $httpProvider) {
    $locationProvider.hashPrefix('');

    $httpProvider.defaults.headers.common.Authorization = 'Bearer ece5e2818a94925eb8f0a1edebff0192494200de';

    $routeProvider.
      when('/users', {
        templateUrl: 'app/users/index.html',
        controller: 'UserController',
        controllerAs: 'vm'
      }).
      when('/users/:userId/repositories', {
        templateUrl: 'app/repositories/index.html',
        controller: 'RepositoryController',
        controllerAs: 'vm'
      }).
      otherwise('/users');
  }
})();