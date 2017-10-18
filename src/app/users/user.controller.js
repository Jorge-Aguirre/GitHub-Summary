// user.controller.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.users')
    .controller('UserController', UserController);

  UserController.$inject = ['userService', '$location'];

  function UserController(userService, $location) {
    var vm = this;
    vm.title = 'GitHub - Users';
    vm.users = [];

    activate();

    function activate() {
      var since = $location.search().since || null;

      userService.getUsers(since).then(function (response) {
        response.data.forEach(function(user) {

          var userData = {
            avatar_url: user.avatar_url,
            login: user.login,
            html_url: user.html_url
          };

          vm.users.push(userData);

          userService.getUser(user.login).then(function (response) {
            userData.name = response.data.name;
          });
        });

        var linkStr = response.headers('Link').split(";")[0]
        var link = linkStr.substring(1, linkStr.length -1);
        vm.since = link.split('since=')[1];
      }, function (error) {
        console.log(error);
      });
    }
  }
})();