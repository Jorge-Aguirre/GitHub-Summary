// user.controller.js
(function () {
  'use strict';

  angular
    .module('GitHubTest.users')
    .controller('UserController', UserController);

  UserController.$inject = ['user'];

  function UserController(user) {
    var vm = this;
    vm.title = 'GitHub - Users';
    vm.users = [];

    activate();

    function activate() {
      user.getUsers().then(function (response) {
        response.data.forEach(function(user) {
          var userData = {
            avatar_url: user.avatar_url,
            login: user.login
          };

          vm.users.push(userData);
        });
        console.log(vm.users);
      }, function (error) {
        console.log(error);
      });
    }
  }
})();