// repository-widget.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.widgets')
    .directive('repositoryWidget', repositoryWidget);

  function repositoryWidget() {
    var directive = {
      templateUrl: 'app/widgets/repository-widget.html'
    }

    return directive;
  }
})();