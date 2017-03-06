(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("logCtrl", logCtrl);
        
    logCtrl.$inject = ["logSrvc", "$scope"];
    
    function logCtrl(logSrvc, $scope){
        var vm = this;
        
        vm.loading = true;
        vm.movimientos = logSrvc.getMovimientos();
                
        $scope.$on("$destroy", function() {
            vm.movimientos.$destroy();
        });
        
        vm.movimientos.$loaded(function() {
            vm.loading = false;
        })
        
    }
})();