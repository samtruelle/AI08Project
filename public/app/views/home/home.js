angular.module('deloreanweb.home', [])

    .config(function($stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('app.home', {
                url: "/home",
                templateUrl: "app/views/home/home.html",
                controller: "homeCtrl",
            });
    })

    .controller('homeCtrl', [ 'flightDateService', '$scope', function(flightDateService, $scope){
       var myDropzone = new Dropzone("#importDropzone", { url: "/home/import"});
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