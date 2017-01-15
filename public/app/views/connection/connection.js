/**
 * Created by sbunlon on 15/12/2016.
 */

angular.module('deloreanweb.connection', [])

.config(function($stateProvider){

    $stateProvider
        .state('app.connection', {
            url:"/connection",
            templateUrl: "app/views/connection/connection.html",
            controller: "connectionCtrl"
        });

})

.controller("connectionCtrl", ['$scope','$rootScope','$window', '$state', function($scope, $rootScope, $window, $state){

    $scope.newAccount = {};
    $scope.connection = {};

    $scope.createAccount = function(){
        console.log($scope.newAccount);
        console.log($scope.connection);
    };

    $scope.login = function() {
        $state.go('app.home');
    };

}]);
