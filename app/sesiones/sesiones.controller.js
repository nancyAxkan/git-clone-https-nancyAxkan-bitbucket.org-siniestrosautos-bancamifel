(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("sesionesCtrl", sesionesCtrl);
        
    sesionesCtrl.$inject = ["sesionesSrvc", "csvSrvc"];
        
    function sesionesCtrl(sesionesSrvc, csvSrvc) {
        var vm = this;
        
        vm.loading = true;
        vm.sesiones = [];
        vm.exportar = exportar;
        
        init();
        
        function init() {
            sesionesSrvc.getSesiones().then(function(aResultados) {
                vm.loading = false;
                vm.sesiones = aResultados;
            });
        }
        
        function exportar() {
            csvSrvc.exportarExcel(vm.sesiones, {
                "descripcionZona": { "titulo" : "Zona" },
                "descripcionSucursal": { "titulo" : "Sucursal" },
                "empleado": { "titulo": "# Empleado" },
                "nombre": { "titulo" : "Nombre" },
                "email": { "titulo": "Correo electrónico" },
                "actualSesion": { "titulo": "Sesion" }
            });
        }
    }
})();