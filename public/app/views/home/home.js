angular.module('deloreanweb.home', [])

    .config(function ($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('app.home', {
                url: "/home",
                templateUrl: "app/views/home/home.html",
                controller: "homeCtrl",
            });
    })

    .controller('homeCtrl', ['flightDateService', 'generalService', 'loginService', 'authenticationService', '$scope', function (flightDateService, generalService, loginService, authenticationService, $scope) {
        var myDropzone = new Dropzone("#importDropzone", {url: "/home/import"});

        //$scope.$on('$viewContentLoaded', function readyToTrick() {
        //    if(!$scope.data) {
        //
        //    }
        //});

        $scope.getAllData = function () {
            generalService.getAllData().then(function($dataObject){
                $scope.data = JSON.parse($dataObject.data);
                myDropzone.removeAllFiles();
                $('#vizBody').show()
                $('#table').show()
                renderViz($scope.data);
            }, function(){
                console.log("no products");
            });
        };

        $scope.logout = function () {
            loginService.logout();
        };
        //$scope.orig = angular.copy($scope.data);

        //flightDateService.().then(function($dataObject){
        //    $scope.products = JSON.parse($dataObject.data);
        //}, function($dataObject){
        //    console.log("no products");
        //});
        //$scope.filterFlightDate = function(date){
        //    $scope.flightDate = date;

        //filterPreviousFlightDate
        //   };

    }]);