// user.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.users')
    .factory('user', user);

  user.$inject = ['$http', '$q'];

  function user($http, $q) {
    var urlBase = 'https://api.github.com';

    var service = {
      getUsers: getUsers,
    };

    return service;
    ///////////////////////////

    function getUsers() {
      return $http.get(urlBase + '/users');
    }
  }
})();