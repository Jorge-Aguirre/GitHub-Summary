// user-widget.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.widgets')
    .directive('userWidget', userWidget);

  function userWidget() {
    var directive = {
      templateUrl: 'app/widgets/user-widget.html'
    };
    return directive;
    /////////////////////
  }
})();