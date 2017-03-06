(function(){
    "use strict";
    
    angular
        .module("mifel")
        .service("shared", shared);
    function shared() {
        var shared = {};
        return shared;
    }
})();