(function () {
    "use strict";
    
    angular
        .module("mifel")
        .service("apService", apService);
        
    apService.$inject = ['$firebaseObject', '$firebaseArray', '$q'];
    
    function apService($firebaseObject, $firebaseArray, $q) {
        var vm = this;
        
        vm.cotizaPrimaTotalAp = cotizaPrimaTotalAp;
        
         function cotizaPrimaTotalAp(producto, edad, sexo, formaPago, datosEconomicos) {
            var ivaFracc = 0;
            var iva = 0;
            var cotizacion = {
                                primaTotal: 0,
                                primaTotalAnualizada: 0,
                                periodos: 0, 
                                ahorro: 0
                            };
            var primaNeta = 0;
            var primaTotal = 0;
            var primaTotalAnualizada = 0;
            var porcFraccionado = 0;
            var ahorro = 0;
            
            primaNeta = obtienePrimaNeta(producto, edad, sexo);
            iva = (primaNeta + datosEconomicos.derecho_poliza)*parseFloat(datosEconomicos.iva);
            primaTotalAnualizada = primaNeta + datosEconomicos.derecho_poliza + iva;
            
            if(formaPago.periodos !== 1){
                //primaNeta = primaNeta + datosEconomicos.derecho_poliza;
                porcFraccionado = obtenerRecargoPagoFraccionado(primaNeta + datosEconomicos.derecho_poliza, formaPago);
                ivaFracc = ((primaNeta + datosEconomicos.derecho_poliza) + porcFraccionado)*parseFloat(datosEconomicos.iva);
                primaTotal = (primaNeta + datosEconomicos.derecho_poliza) + ivaFracc + porcFraccionado;
                ahorro = primaTotal - primaTotalAnualizada;
                iva = ivaFracc;
            }else{
                primaTotal = primaTotalAnualizada;
            }
            
            cotizacion.primaTotal = primaTotal;
            cotizacion.primaTotalAnualizada = primaTotalAnualizada;
            cotizacion.periodos = formaPago.periodos;
            cotizacion.ahorro = ahorro;
            cotizacion.primaNeta = primaNeta;
            cotizacion.porcFraccionado = porcFraccionado;
            cotizacion.iva = iva;
            cotizacion.derechoPoliza = datosEconomicos.derecho_poliza;
            return cotizacion;
        }
        
        function obtenerRecargoPagoFraccionado(prima, formaPago){
            return parseFloat(prima)*parseFloat(formaPago.porcentaje);
        }
        
        function obtienePrimaNeta(producto, edad, sexo){
            var prima = 0;
            if(sexo === 'm'){
                prima = producto.configuraciones[edad].m;
            }else{
                prima = producto.configuraciones[edad].h;
            }
            
            return parseFloat(prima);
        }
    }
})();