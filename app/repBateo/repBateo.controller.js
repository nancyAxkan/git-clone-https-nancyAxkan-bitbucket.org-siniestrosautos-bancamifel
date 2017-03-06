(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("repBateoCtrl", repBateoCtrl);
        
    repBateoCtrl.$inject = ["repBateoSrvc", "csvSrvc"];
    
    function repBateoCtrl(repBateoSrvc, csvSrvc) {
        var vm = this;
        
        vm.loading = true;
        vm.emisiones = [];
        vm.exportar = exportar;
        
        init();
        
        function init() {
            repBateoSrvc.getEmisiones().then(function(aResultado) {
                vm.loading = false;
                
                vm.emisiones = aResultado; 
            });
        }
        
        function exportar() {
            csvSrvc.exportarExcel(vm.emisiones, {
                "descripcionZona": { "titulo" : "Zona Mifel" },
                "descripcionSucursal": { "titulo": "Sucursal" },
                "nombreEjecutivo": { "titulo": "Ejecutivo" },
                "tipoMovimiento": { "titulo": "Tipo de movimiento" },
                "empleado": { "titulo": "# Empleado Mifel" },
                "fechaEmision": { "titulo": "Fecha de emisión" },
                "aseguradora": { "titulo": "Aseguradora" },
                "descripcionProducto": { "titulo": "Producto" },
                "numeroReferencia": { "titulo": "Póliza" },
                "primaNeta": { "titulo": "Prima neta" },
                "derechos": { "titulo": "Derechos" },
                "primaTotal": { "titulo": "Prima total" },
                "planPago": { "titulo": "Plan de pago" },
                "clienteMifel": { "titulo": "# Cliente Mifel" },
                "contratante": { "titulo": "Contratante" },
                "tipoPersona": { "titulo": "Tipo de persona" },
                "rfcContratante": { "titulo": "RFC" },
                "fechaInicioVigencia": { "titulo": "Inicio de vigencia" },
                "fechaFinVigencia": { "titulo": "Fin de vigencia" },
                "renovacion": { "titulo": "Renovación" },
                "origenPoliza": { "titulo": "Origen de póliza" },
                "fechaCotizacion": { "titulo": "Fecha de cotización" }
            });
        }
        
    }
})();