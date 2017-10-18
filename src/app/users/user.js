// user.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.users')
    .factory('userService', userService);

  userService.$inject = ['$http', '$q'];

  function userService($http, $q) {
    var urlBase = 'https://api.github.com';

    var service = {
      getUsers: getUsers,
      getUser: getUser
    };

    return service;
    ///////////////////////////

    function getUsers(since) {
      var urlStr = urlBase + '/users';

      if (since) {
        urlStr += '?since=' + since;
      }
      return $http.get(urlStr);
    }

    function getUser(username) {
      return $http.get(urlBase + '/users/' + username);
    }
  }
})();