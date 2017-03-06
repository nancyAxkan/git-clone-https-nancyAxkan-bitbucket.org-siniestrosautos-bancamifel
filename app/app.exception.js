(function() {
    "use strict";
    
    angular
        .module("mifel")
        .config(exceptionConfig);
        
    exceptionConfig.$inject = ['$provide'];
    
    function exceptionConfig($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }
    
    extendExceptionHandler.$inject = ['$delegate'];
    
    function extendExceptionHandler($delegate) {
        return function(exception, cause) {
            $delegate(exception, cause);
            
            var errorData = {
                exception: exception,
                cause: cause
            }
            
            console.log(errorData);
        }
    }
})()