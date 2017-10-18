// app.module.js
(function () {
  'use strict'

  angular.module('GitHubTest', [
    'ngRoute',
    'GitHubTest.users',
    'GitHubTest.widgets'
  ]);
})();