(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("repProduccionCtrl", repProduccionCtrl);
        
    repProduccionCtrl.$inject = ["repProduccionSrvc", "csvSrvc"];
    
    function repProduccionCtrl(repProduccionSrvc, csvSrvc) {
        var vm = this;
        
        vm.loading = true;
        vm.emisiones = [];
        vm.exportar = exportar;
        
        init();
        
        function init() {
            repProduccionSrvc.getEmisiones().then(function(aResultado) {
                vm.loading = false;
                
                vm.emisiones = aResultado; 
            });
        }
        
        function exportar() {
            csvSrvc.exportarExcel(vm.emisiones, {
                "descripcionZona": { "titulo" : "Zona Mifel" },
                "descripcionSucursal": { "titulo": "Sucursal" },
                "nombreEjecutivo": { "titulo": "Ejecutivo" },
                "empleado": { "titulo": "# Empleado Mifel" },
                "fechaEmision": { "titulo": "Fecha de emisión" },
                "aseguradora": { "titulo": "Aseguradora" },
                "descripcionProducto": { "titulo": "Producto" },
                "numeroReferencia": { "titulo": "Póliza" },
                "tipoMovimiento": { "titulo": "Tipo de movimiento" },
                "clienteMifel": { "titulo": "# Cliente Mifel" },
                "contratante": { "titulo": "Contratante" },
                "tipoPersona": { "titulo": "Tipo de persona" },
                "rfcContratante": { "titulo": "RFC" },
                "primaNeta": { "titulo": "Prima neta" },
                "derechos": { "titulo": "Derechos" },
                "primaTotal": { "titulo": "Prima total" },
                "paquete": { "titulo": "Paquete" },
                "planPago": { "titulo": "Plan de pago" },
                "fechaInicioVigencia": { "titulo": "Inicio de vigencia" },
                "fechaFinVigencia": { "titulo": "Fin de vigencia" },
                "renovacion": { "titulo": "Renovación" },
                "estatus": { "titulo": "Estatus" },
                "origenPoliza": { "titulo": "Origen de póliza" }
            });
        }
        
    }
})();