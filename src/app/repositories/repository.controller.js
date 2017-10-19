// repository.controller.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.repositories')
    .controller('RepositoryController', RepositoryController);

  RepositoryController.$inject = ['repositoryService', '$routeParams'];

  function RepositoryController(repositoryService, $routeParams) {
    var vm = this;
    vm.title = 'GitHub - Repositories';
    vm.repositories = [];

    activate();

    function activate() {
      var username = $routeParams.userId;

      repositoryService.getUserRepos(username).then(function (response) {
          console.log(response);
        response.data.forEach(function(repository) {
          var repositoryData = {
            html_url: repository.html_url,
            name: repository.name,
            description: repository.description,
            forks_count: repository.forks_count,
            issues_count: repository.open_issues_count,
            open_issues_count: repository.open_issues_count
          }

          vm.repositories.push(repositoryData);
        });
      });
    }
  }
})();