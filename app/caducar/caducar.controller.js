(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("caducarCtrl", caducarCtrl);
    
    caducarCtrl.$inject = ["$firebaseArray", "$firebaseObject", "$scope", "$mdToast", "$q", "Auth", "caducarSrvc"];
    function caducarCtrl($firebaseArray, $firebaseObject, $scope, $mdToast, $q, Auth, caducarSrvc) {
        var cd = this;
        cd.loading = true;
        cd.cotizaciones = [];
        cd.total = 0;

        cd.formatDate = formatDate;
        cd.getDate = getDate;
        cd.caducar = caducar;
        cd.online = $scope.online;

        $scope.$watch('online', function(onlineStatus) { 
            cd.online = onlineStatus;
        });

        $scope.$on("$destroy", function() {
            cd.cotizaciones = [];
        });

        caducarSrvc.getCotizaciones().then(function(){
            cd.cotizaciones = caducarSrvc.cotizaciones;
            cd.total = cd.cotizaciones.length;
            cd.loading = false;
        });

        function formatDate(sAAAAMMDD) {
            var anio = sAAAAMMDD.substr(0,4);
            var mes = sAAAAMMDD.substr(4,2);
            var dia = sAAAAMMDD.substr(6,2);
            
            return anio + " / " + mes  + " / " + dia;
        }

        function getDate() {
            var hoy = new Date(); hoy.setMonth(hoy.getMonth()-6);
            var meses = hoy.toLocaleDateString().split("/");
            return meses.map(function(key, index){ if(key.length == 1) { key = "0" + key; } return key}).reverse().join(" / ");
        }

        function caducar() {
            caducarSrvc.confirmarDialogo().then(function(){
                caducarSrvc.caducar();
                cd.cotizaciones = [];
                cd.total = 0;
            });
        }
    }
})();