(function(){
    "use strict";
    
    angular
        .module("mifel")
        .factory("Auth",authFactory);
    authFactory.$inject = ["$firebaseAuth"];
    function authFactory ($firebaseAuth) {
        var fauth = $firebaseAuth();
        
        /*
        fauth.$onAuthStateChanged(function(user) {
            if (!user) {

      		} else {

      		}
        });
        */
        
        return fauth;
    }
})();