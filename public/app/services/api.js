angular.module('deloreanweb.services', ["deloreanweb.constants"])

.factory('apiUrl',['API_URL','$http', function(API_URL, $http){
    return{
        getApiUrl : function(){
            return API_URL;
        }
    }
}])
.factory('flightDateService', ['$http', 'apiUrl', function ($http, apiUrl) {
    return {
        filterPreviousFlightDate: function (date) {
            return $http.post(apiUrl.getApiUrl() + "/flightDate/Before",{date: date});
        }
    }

}]);