(function() {
    "use strict";
    
    angular
        .module("mifel")
        .run(onlineoffline);
        
    onlineoffline.$inject = ["$rootScope"];
        
    function onlineoffline($rootScope) {
        $rootScope.online = true;
        
        if(window.addEventListener) {
            window.addEventListener('offline', onOffline);
            window.addEventListener('online', onOnline);
        } else {
            document.body.attachEvent('onoffline', onOffline);
            document.body.attachEvent('ononline', onOnline);
        }
        
        function onOnline() {
            $rootScope.$apply(function() {
                $rootScope.online = true;
            })
            $rootScope.$broadcast("online");
        }
        
        function onOffline() {
            $rootScope.$apply(function() {
                $rootScope.online = false;
            })
            $rootScope.$broadcast("offline");
        }
    }
})();