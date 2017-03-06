(function(){
    "use strict";
    
    angular
        .module("mifel")
        .controller("inicioCtrl", inicioCtrl);
        
    inicioCtrl.$inject = ["$location"];

    function inicioCtrl($location) {
        var ic = this;
        
        ic.loading = false;
        ic.vida = vida;
        ic.ap = ap;
        
        function vida() {
            $location.path("/vida");
        };
        
        function ap() {
            $location.path("/accidentes-personales");
        };
        
    }
})();