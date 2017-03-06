(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("repUdiCtrl", repUdiCtrl);
        
    repUdiCtrl.$inject = ["repUdiSrvc", "csvSrvc"];
    
    function repUdiCtrl(repUdiSrvc, csvSrvc) {
        var vm = this;
        
        vm.loading = true;
        vm.emisiones = [];
        vm.exportar = exportar;
        
        init();
        
        function init() {
            repUdiSrvc.getEmisiones().then(function(aResultado) {
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
                "recibo": { "titulo": "Recibo" },
                "inicioRecibo": { "titulo": "Inicio de recibo" },
                "finRecibo": { "titulo": "Fin de recibo" },
                "primaNeta": { "titulo": "Prima neta" },
                "derechos": { "titulo": "Derechos" },
                "iva": { "titulo": "IVA" },
                "primaTotal": { "titulo": "Prima total" },
                "porcentajeComision": { "titulo": "Porcentaje comisión" },
                "montoComision": { "titulo": "Monto comisión" },
                "planPago": { "titulo": "Plan de pago" },
                "clienteMifel": { "titulo": "# Cliente Mifel" },
                "contratante": { "titulo": "Contratante" },
                "tipoPersona": { "titulo": "Tipo de persona" },
                "rfcContratante": { "titulo": "RFC" },
                "fechaInicioVigencia": { "titulo": "Inicio de vigencia" },
                "fechaFinVigencia": { "titulo": "Fin de vigencia" },
                "renovacion": { "titulo": "Renovación" },
                "origenPoliza": { "titulo": "Origen de póliza" }
            });
        }
        
    }
})();