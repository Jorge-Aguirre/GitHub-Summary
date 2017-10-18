// app.config.js
(function () {
  'use strict';

  angular
    .module('GitHubTest')
    .config(RouterConfiguration)

  RouterConfiguration.$inject = ['$locationProvider', '$routeProvider'];

  function RouterConfiguration($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider.
      when('/users', {
        templateUrl: 'app/users/index.html',
        controller: 'UserController',
        controllerAs: 'vm'
      }).
      otherwise('/users');
  }
})();