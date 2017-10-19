// repository.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.repositories')
    .factory('repositoryService', repositoryService);

  repositoryService.$inject = ['$http', '$q'];

  function repositoryService($http, $q) {
    var urlBase = 'https://api.github.com';

    var service = {
      getUserRepos: getUserRepos
    };

    return service;
    /////////////////////////////////

    function getUserRepos(username) {
      return $http.get(urlBase + '/users/' + username + '/repos');
    }
  }
})();