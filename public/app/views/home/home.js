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

    .controller('homeCtrl', ['flightDateService', 'generalService', 'loginService', 'authenticationService', '$scope', '$state', function (flightDateService, generalService, loginService, authenticationService, $scope, $state) {
        var myDropzone = new Dropzone("#importDropzone", {url: "/home/import"});

        //$scope.$on('$viewContentLoaded', function readyToTrick() {
        //    if(!$scope.data) {
        //
        //    }
        //});

        $scope.getAllData = function () {
            generalService.getAllData().then(function($dataObject){
                if(JSON.parse($dataObject.data).length) {
                    $("#noDataWarning").hide();
                    $scope.data = JSON.parse($dataObject.data);
                    myDropzone.removeAllFiles();
                    $('#vizBody').show()
                    $('#table').show()
                    console.log($scope.data)
                    renderViz($scope.data);
                }
            }, function(){
                $("#noDataWarning").show();
                console.log("no products");
            });
        };

        $scope.logout = function () {
            loginService.logout();
        };

        $scope.hideViz = function(id){
            console.log('test')
            console.log(id)
            var element = $(id);
            if(element.is(":visible"))
                element.hide();
            else
                element.show();
            //$state.reload();
        };

    }]);