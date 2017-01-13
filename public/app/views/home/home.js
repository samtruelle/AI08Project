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

    .controller('homeCtrl', function($scope, apiUrl){
       var myDropzone = new Dropzone("#importDropzone", { url: "/home/import"});
    });