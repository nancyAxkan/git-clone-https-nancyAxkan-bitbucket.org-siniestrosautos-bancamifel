(function () {
    "use strict";
    
    angular
        .module("mifel")
        .service("vidaService", vidaService);
        
    vidaService.$inject = ['$firebaseObject', '$firebaseArray', '$q'];
    
    function vidaService($firebaseObject, $firebaseArray, $q) {
        var vm = this;
        
        vm.getPrimaTotalVida = getPrimaTotalVida;
        vm.cotizaPrimaTotalVida = cotizaPrimaTotalVida;
        
        function getPrimaTotalVida(vida) {
            vida.configProducto = obtieneConfiguracion(vida.productos, vida.proteccionCon, vida.edad, vida.sexo);
            vida.valoresFormaPago = vida.formasPagoCat.$getRecord(vida.formaPago);

            vida.primaFallecimiento = obtienePrimaFallecimiento(vida.configProducto.fallecimiento, vida.productos.$getRecord(vida.proteccionCon).suma_asegurada, vida.datosEconomicos.recargo_fijo);
            
            if(vida.adicionales){
                if(vida.ima){
                    vida.primaIMA = obtienePrimaAdicional(vida.configProducto.ima, vida.productos.$getRecord(vida.proteccionCon).suma_asegurada);
                }
                if(vida.ise){
                    vida.primaISE = obtienePrimaAdicional(vida.configProducto.ise, vida.productos.$getRecord(vida.proteccionCon).suma_asegurada);
                }
                if(vida.diba){
                    vida.primaDIBA = obtienePrimaAdicional(vida.configProducto.diba, vida.productos.$getRecord(vida.proteccionCon).suma_asegurada);
                }
                vida.sumaAdicionales = vida.primaIMA + vida.primaISE + vida.primaDIBA;
            }
            
            vida.primaTotal = vida.sumaAdicionales + vida.primaFallecimiento;
            
            if(vida.valoresFormaPago.periodos !== 1){
                vida.porcFraccionado = vida.primaTotal * parseFloat(vida.valoresFormaPago.porcentaje);
                vida.primaTotal = vida.primaTotal + vida.porcFraccionado;
                vida.muestraAhorro = true;
                vida.pagoFraccionado = vida.primaTotal/vida.valoresFormaPago.periodos;
            } else {
                vida.pagoFraccionado = vida.primaTotal.toFixed(2);
            }
            
            vida.muestraPrima = true;
            vida.periodosPrima = vida.valoresFormaPago.periodos;
        }
        
        function cotizaPrimaTotalVida(configProducto, producto, datosEconomicos, adicionales, formaPago) {
            var cotizacion = {
                                primaTotal: 0,
                                primaTotalAnualizada: 0,
                                periodos: 0, 
                                ahorro: 0
                            };
            var primaFallecimiento = 0;
            var ahorro = 0;
            var primaIMA = 0;
            var primaISE = 0;
            var primaDIBA = 0;
            var primaTotal = 0;
            var sumaAdicionales = 0;
            var porcFraccionado = 0;
            var primaTotalAnualizada = 0;
            
            primaFallecimiento = obtienePrimaFallecimiento(configProducto.fallecimiento, producto.suma_asegurada, datosEconomicos.recargo_fijo);
            
            if(adicionales.length !== 0){
                for(var i = 0; i<adicionales.length; i++){
                    if(adicionales[i].cobertura === "ima"){
                        primaIMA = obtienePrimaAdicional(configProducto.ima, producto.suma_asegurada);
                    }
                    if(adicionales[i].cobertura === "ise"){
                        primaISE = obtienePrimaAdicional(configProducto.ise, producto.suma_asegurada);
                    }
                    if(adicionales[i].cobertura === "diba"){
                        primaDIBA = obtienePrimaAdicional(configProducto.diba, producto.suma_asegurada);
                    }
                }
                sumaAdicionales = primaIMA + primaISE + primaDIBA;
            }
            primaTotalAnualizada = sumaAdicionales + primaFallecimiento;
            
            if(formaPago.periodos !== 1){
                porcFraccionado = primaTotalAnualizada * parseFloat(formaPago.porcentaje);
                primaTotal = primaTotalAnualizada + porcFraccionado;
                ahorro = primaTotal - primaTotalAnualizada;
            }else{
                primaTotal = primaTotalAnualizada;
            }
            
            cotizacion.primaTotal = primaTotal;
            cotizacion.primaTotalAnualizada = primaTotalAnualizada;
            cotizacion.periodos = formaPago.periodos;
            cotizacion.ahorro = ahorro;
            cotizacion.primaFallecimiento = primaFallecimiento;
            cotizacion.primaIMA = primaIMA;
            cotizacion.primaISE = primaISE;
            cotizacion.primaDIBA = primaDIBA;
            return cotizacion;
        }
        
        function obtieneConfiguracion(productos, sumaAse, edad, sexo){
            var configuracion = {};
            if(sexo === 'm'){ 
               edad = edad - 3;
            }
            configuracion = productos.$getRecord(sumaAse).configuraciones[edad];
            return configuracion;
        }
        
        function obtienePrimaAdicional(tarifa, sumaAse){
            return parseFloat(tarifa)*parseFloat(sumaAse/1000);
        }
        
        function obtienePrimaFallecimiento(tarifaFalle, sumaAse, recargofijo){
            return (parseFloat(tarifaFalle)*parseFloat(sumaAse/1000))+parseFloat(recargofijo);
        }
        
    }
})();









