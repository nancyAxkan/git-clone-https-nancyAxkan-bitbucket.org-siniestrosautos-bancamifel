(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("repCobranzaCtrl", repCobranzaCtrl);
        
    repCobranzaCtrl.$inject = ["repCobranzaSrvc", "csvSrvc"];
    
    function repCobranzaCtrl(repCobranzaSrvc, csvSrvc) {
        var vm = this;
        
        vm.loading = true;
        vm.emisiones = [];
        vm.exportar = exportar;
        
        init();
        
        function init() {
            repCobranzaSrvc.getEmisiones().then(function(aResultado) {
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
                "primaTotal": { "titulo": "Prima total" },
                "fechaEnvio": { "titulo": "Fecha de envío" },
                "fechaPago": { "titulo": "Fecha de pago" },
                "planPago": { "titulo": "Plan de pago" },
                "respuestaBanco": { "titulo": "Respuesta del banco" },
                "motivoRechazo": { "titulo": "Motivo de rechazo" },
                "banco": { "titulo": "Banco" },
                "tipoTarjeta": { "titulo": "Tipo de tarjeta" },
                "numeroTarjeta": { "titulo": "No. de tarjeta o cuenta Clabe" },
                "clienteMifel": { "titulo": "# Cliente Mifel" },
                "contratante": { "titulo": "Contratante" },
                "tipoPersona": { "titulo": "Tipo de persona" },
                "rfcContratante": { "titulo": "RFC" },
                "fechaInicioVigencia": { "titulo": "Inicio de vigencia" },
                "fechaFinVigencia": { "titulo": "Fin de vigencia" },
                "renovacion": { "titulo": "Renovación" },
                "estatus": { "titulo": "Estatus" },
                "origenPoliza": { "titulo": "Origen de póliza" },
                "correoElectronico": { "titulo": "Correo electrónico" },
                "telefono": { "titulo": "Teléfono" }
            });
        }
        
    }
})();