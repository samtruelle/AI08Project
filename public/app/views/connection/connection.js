angular.module('deloreanweb.connection', [])

.config(function($stateProvider){

    $stateProvider
        .state('app.connection', {
            url:"/connection",
            templateUrl: "app/views/connection/connection.html",
            controller: "connectionCtrl"
        });

})

.controller("connectionCtrl", ['loginService', 'authenticationService', '$scope','$rootScope','$window', '$state', function(loginService, authenticationService, $scope, $rootScope, $window, $state){

    $scope.newAccount = {};
    $scope.connection = {};

    $scope.login = function(email, password) {
        loginService.login(email, password).then( function($data) {
            if ($data) {
                var user = JSON.parse(JSON.stringify($data.data));
                $scope.user = JSON.parse($data).mail;
                authenticationService.createSession(user.mail, {});
                $scope.user = user.mail;
                $state.go('app.home');
            }
        })
    };

}]);
