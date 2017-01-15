/**
 * Created by sbunlon on 12/12/2016.
 */

angular.module('deloreanweb', ['deloreanweb.services', 'ui.router', 'deloreanweb.constants', 'deloreanweb.home', 'deloreanweb.table', 'deloreanweb.connection', 'deloreanweb.directives'])

    .config(function ($stateProvider, $locationProvider) {

        $stateProvider
            .state('app', {
                url: "",
                abstract: true,
                templateUrl: "app/app.html",
                controller: "appCtrl"
            });

        //letting angular to manage the navigation history
        $locationProvider.html5Mode(true);

    })

    .run(function ($state) {
        $state.go("app.home")
    })

.controller("appCtrl", ['$scope', function($scope){

}]);