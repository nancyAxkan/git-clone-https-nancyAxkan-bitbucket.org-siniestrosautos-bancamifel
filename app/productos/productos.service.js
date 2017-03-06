(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("productosSrvc", productosSrvc);
        
    productosSrvc.$inject = ["$firebaseArray", "$firebaseObject", "$rootScope", "logSrvc"];
    
    function productosSrvc($firebaseArray, $firebaseObject, $rootScope, logSrvc) {
        var vm = this;
        
        vm.productos = [];
        vm.getPrimas = getPrimas;
        vm.updateProducto = updateProducto;
        vm.addProducto = addProducto;
        vm.deleteProducto = deleteProducto;
        vm.getProductos = getProductos;
        
        function getProductos() {
            vm.productos = $firebaseArray(firebase.database().ref("producto").orderByChild("activo").equalTo(true));
            
            return vm.productos;
        }
        
        function deleteProducto(oProducto) {
            oProducto.activo = false;
            
            logSrvc.addMovimiento("Catálogo de Productos", "BORRADO", "Producto: " + oProducto.descripcion);
            
            vm.productos.$save(oProducto);
        }
        
        function addProducto(oProducto) {
            prepararConfiguracion(oProducto);
            
            logSrvc.addMovimiento("Catálogo de Productos", "NUEVO", "Producto: " + oProducto.descripcion);
            
            return vm.productos.$add(oProducto);
        }
        
        function getPrimas(oProducto) {
            var aPrimasAgrupadas = [];
            var i;
            var aPrimas, aMin, aMax;
            
            if (oProducto.tipo == "AP") {
                aPrimas = [];
                for (i = 0; i < oProducto.configuraciones.length; i++) {
                    if (oProducto.configuraciones[i]) {
                        oProducto.configuraciones[i].edadIni = i;
                        oProducto.configuraciones[i].edadFin = i;
                        aPrimas.push(oProducto.configuraciones[i]);
                    }
                }
                
                aMin = new jinqJs()
                    .from(aPrimas)
                    .groupBy('h', 'm')
                        .min('edadIni')
                    .select('h', 'm', 'edadIni');
                    
                aMax = new jinqJs()
                    .from(aPrimas)
                    .groupBy('h', 'm')
                        .max('edadFin')
                    .select('h', 'm', 'edadFin');
                
                aPrimasAgrupadas = new jinqJs()
                    .from(aMin)
                    .join(aMax)
                        .on("h", "m")
                    .select();
            }
            
            if (!angular.isArray(oProducto.configuraciones)) {
                function isNumber(n) {
                  return !isNaN(parseFloat(n)) && isFinite(n);
                }
                
                var arr =[];
                for( i in oProducto.configuraciones ) {
                    if (oProducto.configuraciones.hasOwnProperty(i)){
                        if (isNumber(i)){
                            arr[i] = oProducto.configuraciones[i];
                        }else{
                          arr.push(oProducto.configuraciones[i]);
                        }
                    }
                }
                
                oProducto.configuraciones = arr;
            }
            
            if (oProducto.tipo == "VIDA") {
                aPrimas = [];
                for (i = 0; i < oProducto.configuraciones.length; i++) {
                    if (oProducto.configuraciones[i]) {
                        oProducto.configuraciones[i].edadIni = i;
                        oProducto.configuraciones[i].edadFin = i;
                        aPrimas.push(oProducto.configuraciones[i]);
                    }
                }
                
                aMin = new jinqJs()
                    .from(aPrimas)
                    .groupBy('diba', 'fallecimiento', 'ima', 'ise')
                        .min('edadIni')
                    .select('diba', 'fallecimiento', 'ima', 'ise','edadIni');
                    
                aMax = new jinqJs()
                    .from(aPrimas)
                    .groupBy('diba', 'fallecimiento', 'ima', 'ise')
                        .max('edadFin')
                    .select('diba', 'fallecimiento', 'ima', 'ise','edadFin');
                
                aPrimasAgrupadas = new jinqJs()
                    .from(aMin)
                    .join(aMax)
                        .on('diba', 'fallecimiento', 'ima', 'ise')
                    .select();
            }
            
            for (i = 0; i < aPrimasAgrupadas.length; i++) {
                var prima = aPrimasAgrupadas[i];
                
                if (prima.edadIni == prima.edadFin) {
                    prima.edadFin = undefined;
                }
            }
            
            return aPrimasAgrupadas;
            
        }
        
        function prepararConfiguracion(oProducto) {
            var configuraciones = [];
            var maxIni = new jinqJs()
                .from(oProducto.primas)
                .max("edadIni")
                .select();
                
            var maxFin = new jinqJs()
                .from(oProducto.primas)
                .max("edadFin")
                .select();
                
            var max = 0;
            
            var n;
                
            if (maxIni.length > 0) {
                maxIni = Number(maxIni[0]);
            }
            
            if (maxFin.length > 0) {
                maxFin = Number(maxFin[0]);
            }
            
            max = Math.max(maxIni, maxFin);
            
            for (n = 0; n <= max; n++) {
                configuraciones.push(null);
            }
                
            for (n = 0; n < oProducto.primas.length; n++) {
                var prima = oProducto.primas[n];
                
                if (prima.edadFin == undefined) {
                    configuraciones[prima.edadIni] = setDatosPrima(prima, oProducto.tipo);
                } else {
                    for (var i = prima.edadIni; i <= prima.edadFin; i++) {
                        configuraciones[i] = setDatosPrima(prima, oProducto.tipo);
                    }
                }
            }
            
            delete oProducto.primas;
            
            oProducto.activo = true;
            oProducto.configuraciones = configuraciones;
            
            return configuraciones;
        }
        
        function updateProducto(oProducto) {
            prepararConfiguracion(oProducto);
            
            delete oProducto.edit;
            
            logSrvc.addMovimiento("Catálogo de Productos", "ACTUALIZADO", "Producto: " + oProducto.descripcion);
            
            return vm.productos.$save(oProducto);
        }
        
        function setDatosPrima(oPrima, sTipo) {
            var oPrimaNueva = {};
            
            if (sTipo == "AP") {
                oPrimaNueva = { h: oPrima.h, m: oPrima.m };
            }
            
            if (sTipo == "VIDA") {
                oPrimaNueva = { diba: oPrima.diba, fallecimiento: oPrima.fallecimiento, ima: oPrima.ima, ise: oPrima.ise };
            }
            
            return oPrimaNueva;
        }
    }
})();