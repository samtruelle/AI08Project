angular.module('deloreanweb.services', ["deloreanweb.constants"])

.factory('apiUrl',['API_URL','$http', function(API_URL, $http){
    return{
        getApiUrl : function(){
            return API_URL;
        }
    }
}])