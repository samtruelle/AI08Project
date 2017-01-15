angular.module('deloreanweb.services', ["deloreanweb.constants"])

    .factory('apiUrl', ['API_URL', '$http', function (API_URL, $http) {
        return {
            getApiUrl: function () {
                return "/api";
            }
        }
    }])
    .factory('flightDateService', ['$http', 'apiUrl', function ($http, apiUrl) {
        return {
            filterPreviousFlightDate: function (date) {
                return $http.get(apiUrl.getApiUrl() + "/flightDate/Before", {date: date});
            }
        }
    }])
    .factory('generalService', ['$http', 'apiUrl', function ($http, apiUrl) {
        return {
            getAllData: function () {
                return $http.post(apiUrl.getApiUrl() + "/file", {});
            }
        }
    }])
    .factory('loginService', ['$http', 'apiUrl', 'authenticationService', '$state', function ($http, apiUrl, authenticationService, $state) {
        return {
            login: function (email, password) {
                return $http.post(apiUrl.getApiUrl() + '/login', { mail: email, password: password});
            },
            logout: function (){
                authenticationService.endSession();
                $state.go("app.connection",{},{reload:true});
            }
        }

    }])
    .factory('authenticationService',['$window', function ($window) {
        return {
            isAuthenticated: false,
            createSession: function (user, token) {
                $window.localStorage.user = JSON.stringify(user);
                //$window.localStorage.token = token;
            },
            endSession: function () {
                delete $window.localStorage.user;
                //delete $window.localStorage.token;
            },
            isLogged: function () {
                return (angular.isDefined($window.localStorage.user) && angular.isDefined($window.localStorage.token));
            },
            getUserLogged: function () {
                return JSON.parse($window.localStorage.user || null);
            },
            refreshUser: function (user) {
                $window.localStorage.user = JSON.stringify(user);
            },
            setStateAsked: function (state) {
                $window.localStorage.stateAsked = state;
            },
            getStateAsked: function () {
                var state = $window.localStorage.stateAsked;
                delete $window.localStorage.stateAsked;
                return state;
            }
        }
    }]);