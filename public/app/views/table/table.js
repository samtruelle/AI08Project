/**
 * Created by Antoine on 1/14/2017.
 */
angular.module('deloreanweb.table', [])
.config(function($stateProvider){

    $stateProvider
        .state('app.table', {
            url:"/table",
            templateUrl: "app/views/table/table.html",
        });

})
